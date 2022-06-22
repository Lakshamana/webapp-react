import React, { Suspense, useState, useLayoutEffect } from 'react'
import { Center } from '@chakra-ui/react'
import * as crypto from 'crypto-js'
import axios from 'axios'

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

    const origin =
        NODE_ENV === 'development'
            ? REACT_APP_ORGANIZATION_URL
            : window.location.origin

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
                Organization not found!
            </Center>
        )

    return (
        <Suspense fallback={<></>}>
            {TemplateProvider && <TemplateProvider />}
        </Suspense>
    )
}

export { AppFactory }
