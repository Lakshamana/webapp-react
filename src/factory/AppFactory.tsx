import { Center, Flex, Text } from '@chakra-ui/react'
import axios from 'axios'
import * as crypto from 'crypto-js'
import React, { Suspense, useLayoutEffect, useState } from 'react'

import { Icon } from '@iconify/react'
import { setConfigEnvs } from 'config/envs'

const AppFactory = () => {
    const [error, setError] = useState(false)
    const [envs, setEnvs] = useState(null)

    const TemplateProvider = envs
        ? React.lazy(() => import('components/templates/templateProvider/index'))
        : undefined

    const {
        REACT_APP_ORGANIZATION_URL,
        NODE_ENV,
        REACT_APP_REMOTE_ENV_SECRET,
        REACT_APP_API_ENDPOINT,
    } = process.env

    const origin = REACT_APP_ORGANIZATION_URL
    //TODO: dynamic metadata tests
    // NODE_ENV === 'development'
    //     ? REACT_APP_ORGANIZATION_URL
    //     : window.location.origin

    useLayoutEffect(() => {
        getEnvs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const decryptEnv = async (encryptedEnv) => {
        const decryptedEnv = crypto.AES.decrypt(
            encryptedEnv,
            REACT_APP_REMOTE_ENV_SECRET
        )
        const data = JSON.parse(decryptedEnv.toString(crypto.enc.Utf8))
        await setConfigEnvs(data)
        await setEnvs(data)
    }

    const getEnvs = async () => {
        await axios.get(
            `https://${REACT_APP_API_ENDPOINT}/env-config`,
            {
                headers: {
                    organization: origin || ''
                }
            }
        ).then((result) => {
            decryptEnv(result.data.body.data.result)
        }).catch((error) => {
            setError(error.message)
        })
    }

    //TODO: Create screen for not found organization
    if (error)
        return (
            <Center w={'98vw'} h={'98vh'}>
                <Flex
                    borderRadius='8px'
                    w='100%'
                    maxW="500px"
                    h="360px"
                    bg='#F6F6F6'
                    flexDirection="column"
                    boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
                    fontFamily='Arial, Helvetica, sans-serif'
                >
                    <Flex
                        bg='red'
                        w="100%"
                        h="60%"
                        borderRadius='8px 8px 0px 0px'
                        justifyContent='center'
                        alignItems='center'
                        color='white'
                        fontWeight='600'
                        flexDir='column'
                        gridGap='1em'
                    >
                        <Icon icon='ci:off-outline-close' width='40px' />
                        <Text>Platform Not Found!</Text>
                    </Flex>
                    <Flex
                        w='100%'
                        h='40%'
                        justifyContent='center'
                        alignItems='center'
                        fontWeight='500'
                    >
                        <Text
                            color='#666666'
                        >Please check your url and try again!</Text>
                    </Flex>
                </Flex>
            </Center>
        )

    return (
        <Suspense fallback={<></>}>
            {TemplateProvider && <TemplateProvider />}
        </Suspense>
    )
}

export { AppFactory }
