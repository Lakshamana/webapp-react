import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Flex, Box, Text, Textarea } from '@chakra-ui/react'
import { useLazyQuery, useMutation } from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  QUERY_COMMENTS,
  MUTATION_ADD_COMMENT,
  MUTATION_UPDATE_COMMENT,
  MUTATION_DELETE_COMMENT,
  MUTATION_ADD_REPORT
} from 'services/graphql'
import { Post, SortDirection, Comment as CommentType } from 'generated/graphql'
import { DEFAULT_PAGESIZE_COMMENTS } from 'config/constants'
import { CommentHeader, CommentInput, CommentCard, CommentLoading, Modal } from 'components'
import { useCommentsStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { initialValues, validationSchema } from './settings'
import { useFormik } from 'formik'
import { ISelectPopup, typeOfCard } from './types'

const Comments = ({ ...props }: Post) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const {
    commentsStore,
    repliesStore,
    setUpdateCommentsStore,
    setUpdateRepliesStore,
    modalOption,
    setModalOption,
    resetModal
  } = useCommentsStore()
  const [filterBy, setFilterBy] = useState<SortDirection>(SortDirection.Desc)
  const [filterPage, setFilterPage] = useState<number>(0)
  const [replyData, setReplyData] = useState({ replyId: '', postId: '' })
  const [getComments, { data, loading: dataLoading }] = useLazyQuery(QUERY_COMMENTS, {
    fetchPolicy: 'no-cache'
  })
  const [addComment, { data: newComment, loading: newCommentLoading }] = useMutation(MUTATION_ADD_COMMENT)
  const [editComment, { data: editedComment, loading: editedCommentLoading }] = useMutation(MUTATION_UPDATE_COMMENT)
  const [deleteComment, { data: deletedComment, loading: deleteCommentLoading }] = useMutation(MUTATION_DELETE_COMMENT)
  const [deleteReply, { data: deletedReply, loading: deleteReplyLoading }] = useMutation(MUTATION_DELETE_COMMENT)
  const [reportComment, { data: reportedComment, loading: reportCommentLoading }] = useMutation(MUTATION_ADD_REPORT)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllComments(), [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllComments(), [filterBy])

  useEffect(() => {
    if (!data) return
    setFilterPage(data.comments?.page)
    if (filterPage === 0) {
      setUpdateCommentsStore({
        hasMore: data.comments?.hasNextPage,
        totalComments: data.comments?.total,
        allComments: data.comments?.rows
      })
      return
    }

    const updateComments = [
      ...commentsStore.allComments,
      ...data.comments?.rows
    ]
    setUpdateCommentsStore({
      hasMore: data.comments?.hasNextPage,
      totalComments: data.comments?.total,
      allComments: updateComments
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    if (!newComment) return
    const totalComments = commentsStore.totalComments + 1
    if (filterBy === SortDirection.Desc) {
      const updateComments = [
        newComment.addComment,
        ...commentsStore.allComments
      ]
      setUpdateCommentsStore({
        totalComments,
        allComments: [...updateComments]
      })
      return
    }
    if (!commentsStore.hasMore) {
      const updateComments = [
        ...commentsStore.allComments,
        newComment.addComment
      ]
      setUpdateCommentsStore({
        totalComments,
        allComments: [...updateComments]
      })
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCommentLoading])

  useEffect(() => {
    if (!editedComment) return
    const totalComments = commentsStore.totalComments
    const updateComments = commentsStore.allComments.map(each => {
      if (each.id === editedComment.updateComment.id) {
        return {
          ...each,
          description: editedComment.updateComment.description
        }
      }
      return each
    })
    setUpdateCommentsStore({
      totalComments,
      allComments: [...updateComments]
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editedComment])

  useEffect(() => {
    if (!deletedComment) return
    const totalComments = commentsStore.totalComments - 1
    const updateComments = commentsStore.allComments.filter(each => each.id !== deletedComment.deleteComment.id)
    setUpdateCommentsStore({
      totalComments,
      allComments: [...updateComments]
    })
    resetModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedComment])

  useEffect(() => {
    if (!deletedReply) return
    const getRepliesComments = repliesStore[replyData.postId]
    const { allComments, totalComments } = getRepliesComments
    const updateTotalComments = totalComments - 1
    const updateRepliesComments = allComments.filter(each => each.id !== replyData.replyId)
    setUpdateRepliesStore({
      id: replyData.postId,
      totalComments: updateTotalComments,
      allComments: [...updateRepliesComments]
    })
    updateCountCommentsStore(replyData.postId)
    resetModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedReply])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => resetModal(), [reportedComment])

  const updateCountCommentsStore = (postId: string) => {
    const { totalComments, allComments } = commentsStore
    const updateComments = allComments.map(each => {
      if (each.id === postId) {
        return { ...each, countComments: each.countComments - 1 }
      }
      return each
    })
    setUpdateCommentsStore({
      totalComments,
      allComments: [...updateComments]
    })
  }

  const getAllComments = (page: number = 1) => {
    getComments({
      variables: {
        filter: {
          post: props.id,
          page,
          pageSize: DEFAULT_PAGESIZE_COMMENTS,
          sortBy: getSortByFilter()
        }
      }
    })
  }

  const loadMore = () => {
    if (commentsStore.hasMore) getAllComments(filterPage + 1)
  }

  const getSortByFilter = () => filterBy === SortDirection.Asc
    ? "createdAt.asc"
    : "createdAt.desc"

  const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    setUpdateCommentsStore({ allComments: [], hasMore: false, totalComments: 0 })
    setFilterPage(0)
    setFilterBy(value)
  }

  const handleReportComment = ({ reportReason }) => {
    reportComment({
      variables: {
        payload: {
          idReported: modalOption.id,
          type: 'POST',
          reason: reportReason
        }
      }
    })
  }

  const handleSelectPopupOption = (selected: ISelectPopup, typeOfCard: typeOfCard, postId: string) => {
    if (selected.option === 'DELETE') {
      if (typeOfCard === 'REPLY') {
        setReplyData({ replyId: selected.id, postId })
        setModalOption({
          status: true,
          typeEvent: selected.option,
          text: t('page.post.comment.confirm_delete'),
          action: () => deleteReply({ variables: { id: selected.id } }),
          loadingAction: deleteReplyLoading
        })
        return
      }
      setModalOption({
        status: true,
        typeEvent: selected.option,
        text: t('page.post.comment.confirm_delete'),
        action: () => deleteComment({ variables: { id: selected.id } }),
        loadingAction: deleteCommentLoading
      })
      return
    }

    if (selected.option === 'REPORT') {
      setModalOption({
        status: true,
        typeEvent: selected.option,
        text: '',
        id: selected.id,
        action: formik.handleSubmit,
        loadingAction: reportCommentLoading
      })
    }
  }

  const closeModal = () => {
    formik.resetForm()
    resetModal()
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: handleReportComment
  })

  return (
    <>
      <Modal
        isCentered
        isOpen={modalOption.status}
        onClose={closeModal}
        onConfirm={modalOption.action}
        isActionDisabled={modalOption.loadingAction}
        loading={modalOption.loadingAction}
        closeOnOverlayClick={true}
        actionLabel={modalOption.text}
        closeButton={true}
      >
        <>
          {
            modalOption.typeEvent === 'DELETE' &&
            <Box textAlign="center">
              <Text
                color={colors.generalText[colorMode]}
                fontSize={'1.5rem'}
                textAlign={'center'}
                fontWeight={500}
              >
                {`${t('page.post.comment.delete') + ' ?'}`}
              </Text>
            </Box>
          }
          {
            modalOption.typeEvent === 'REPORT' &&
            <Box textAlign="center">
              <Text
                color={colors.generalText[colorMode]}
                fontSize={'1.5rem'}
                textAlign={'center'}
                fontWeight={500}
              >
                {t('page.post.comment.report')}
              </Text>
              <Text
                color={colors.generalText[colorMode]}
                textAlign={'center'}
                mb={2}
              >
                {t('page.post.comment.report_reason')}
              </Text>
              <Textarea
                type="text"
                name="reportReason"
                value={formik.values.reportReason}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                color={colors.inputText[colorMode]}
                backgroundColor={colors.inputBg[colorMode]}
              />
              {
                !!formik.errors.reportReason && formik.touched.reportReason &&
                <Text
                  color={colors.generalText[colorMode]}
                  textAlign={'center'}
                  mb={-4}
                >
                  {formik.errors.reportReason}
                </Text>
              }
            </Box>
          }
        </>
      </Modal>
      <Flex flexDirection="column" width={'100%'}>
        <CommentHeader
          totalComments={commentsStore.totalComments}
          filterBy={filterBy}
          loading={dataLoading}
          handleFilterChange={handleFilterChange}
        />
        <CommentInput
          postId={props.id}
          action={addComment}
          actionLoading={newCommentLoading}
        />
        {
          newCommentLoading &&
          commentsStore.totalComments === 0 &&
          <CommentLoading show={3} />
        }
        <InfiniteScroll
          dataLength={commentsStore.allComments?.length}
          next={loadMore}
          hasMore={commentsStore?.hasMore || false}
          loader={<CommentLoading show={3} />}
        >
          {
            commentsStore.allComments?.map((comment: CommentType) =>
              <CommentCard
                key={`comment-${comment.id}`}
                postId={props.id}
                addComment={addComment}
                editComment={editComment}
                selectPopupOption={handleSelectPopupOption}
                newCommentLoading={newCommentLoading}
                editedCommentLoading={editedCommentLoading}
                {...comment}
              />
            )}
        </InfiniteScroll>
      </Flex>
    </>
  )
}

export { Comments }
