type configValues = {
    web_urls: {
        rockstar: string
        pantryshop: string
    },
    login_credentials?: {
        alice: {
            email: string,
            password: string
        }
    }
}

const staging: configValues = {
    web_urls: {
        rockstar: 'https://www.rsenergystaging.com/',
        pantryshop: 'https://www.pantryshopstaging.com/'
    },
    login_credentials: {
        alice: {
            email: 'alice@example.com',
            password: '123456'
        }
    }
}

const uat: configValues = {
    web_urls: {
        rockstar: 'https://www.rsenergyuat.com/',
        pantryshop: 'https://www.pantryshopuat.com/'
    },
    login_credentials: {
        alice: {
            email: 'alice@example.com',
            password: '123456'
        }
    }
}

const environmentConfig = {
    staging: staging,
    uat: uat,
}

export const testConfig: configValues = process.env.ENV ? environmentConfig[process.env.ENV] : environmentConfig.staging;