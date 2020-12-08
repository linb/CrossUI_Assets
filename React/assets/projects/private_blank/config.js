/*jshint esversion: 8 */
export default {
    baseURL : "",
    fetchMocker : (options) =>{
        let data;
        const mock = (options) => {
            switch(options.url){
                case "checkToken":
                    data = { token : "fake_token" };
                    break;
                case "signUp":
                    data = { user:{ame:"User",token:"fake_token"}};
                    break;
                case "signIn":
                    data = { user:{ame:"User",token:"fake_token"}};
                    break;
                case "signOut":
                    data = {  };
                    break;
            }
            return Object.assign({ok : 1}, data);
        };

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mock(options));
            }, 300);
        });        
    }
};
