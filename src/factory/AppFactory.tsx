import React, { Suspense, useState, useLayoutEffect } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { Center } from '@chakra-ui/layout'
import { QUERY_ENV_CONFIG } from 'services/graphql'
import * as crypto from 'crypto-js'
import { getData, saveData } from 'services/storage'
import { APP_ENVS } from 'config/constants'
import { setConfigEnvs } from 'config/envs'

const AppFactory = () => {
    const [error, setError] = useState(false)
    const TemplateProvider = React.lazy(() => import('components/templates/templateProvider/index'))
    const App = React.lazy(() => import('App'))

    const {
        REACT_APP_ORGANIZATION_URL,
        NODE_ENV,
        REACT_APP_REMOTE_ENV_SECRET,
        REACT_APP_API_ENDPOINT,
    } = process.env

    useLayoutEffect(() => {
        const storedEncryptedEnv = getData(APP_ENVS)

        const origin = NODE_ENV === 'development' ? REACT_APP_ORGANIZATION_URL : window.location.origin

        storedEncryptedEnv ? decryptEnv(storedEncryptedEnv) : getEnvs(origin)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const client = new ApolloClient({
        uri: `https://${REACT_APP_API_ENDPOINT}/graphql`,
        cache: new InMemoryCache(),
    })

    const decryptEnv = async (encryptedEnv) => {
        const decryptedEnv = crypto.AES.decrypt(encryptedEnv, REACT_APP_REMOTE_ENV_SECRET)
        const data = JSON.parse(decryptedEnv.toString(crypto.enc.Utf8))
        await setConfigEnvs(data)
    }

    const getEnvs = async (origin) => {
        await client
            .query({
                query: QUERY_ENV_CONFIG,
                variables: {
                    origin
                },
            })
            .then((result) => {
                saveData(APP_ENVS, result.data.envConfig.result)
                decryptEnv(result.data.envConfig.result)
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    //TODO: Create screen for not found organization
    if (error) return <Center w={'98vw'} h={'98vh'}>{error}</Center>

    return (
        <Suspense fallback={<></>}>
            <TemplateProvider>
                <App />
            </TemplateProvider>
        </Suspense>
    )
}

export { AppFactory }
