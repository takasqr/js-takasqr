export class URLManager {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    // URLから引数に取ったパラメータを検索して返す
    getParam(paramName: string): string | null {
        // URLからクエリ文字列（?以降の部分）を取得
        const queryString = this.url.split('?')[1];

        if (queryString) {
            // クエリ文字列をパラメータごとに分割
            const params = queryString.split('&');
            
            for (const param of params) {
                const [key, value] = param.split('=');
                if (key === paramName) {
                    // パラメータ名が一致する場合、値を返す
                    return decodeURIComponent(value);
                }
            }
        }

        // パラメータが見つからなかった場合、nullを返す
        return null;
    }
}
