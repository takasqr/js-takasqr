class Analytics {
    isStartedWebApp: Boolean = false;
    usedFunctions: Array<String> = []

    useWebApp(): void {
        if (this.isStartedWebApp === false) {
            
            // Google TagManager
            // @ts-ignore
            dataLayer.push({ event: 'use-webapp' })

            this.isStartedWebApp = true
        }
    }

    useFunction(functionName: String): void {
        if (!this.usedFunctions.includes(functionName)) {

            // Google TagManager
            // @ts-ignore
            dataLayer.push({ event: 'use-function' })

            this.usedFunctions.push(functionName)
        }
    }
  }

export default new Analytics();