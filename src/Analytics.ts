class Analytics {
    isStartedWebApp: Boolean = false;
    usedFunctions: Array<String> = []

    useWebApp(): void {
        if (this.isStartedWebApp === false) {

            if (process.env.NODE_ENV === 'production') {
                // Google TagManager
                // @ts-ignore
                dataLayer.push({ event: 'use-webapp' })
            } else {
                console.log('開発環境：use-webapp が実行されました。')
            }

            this.isStartedWebApp = true
        }
    }

    useFunction(functionName: String): void {
        if (!this.usedFunctions.includes(functionName)) {

            if (process.env.NODE_ENV === 'production') {
                // Google TagManager
                // @ts-ignore
                dataLayer.push({ event: 'use-function' })
            } else {
                console.log('開発環境：use-function が実行されました。')
            }

            this.usedFunctions.push(functionName)
        }
    }
  }

export default new Analytics();