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
                case "pageVisitorData":
                    data = {
                        lines : [{
                            name: 'Page A', uv: 4000, pv: 2400, amt: 2400
                        }, {
                            name: 'Page B', uv: 3000, pv: 1398, amt: 2210
                        }, {
                            name: 'Page C', uv: 2000, pv: 9800, amt: 2290
                        }, {
                            name: 'Page D', uv: 2780, pv: 3908, amt: 2000
                        }, {
                            name: 'Page E', uv: 1890, pv: 4800, amt: 2181
                        }, {
                            name: 'Page F', uv: 2390, pv: 3800, amt: 2500
                        }, {
                            name: 'Page G', uv: 3490, pv: 4300, amt: 2100
                        }]
                    };
                    break;
                case "recentOrders":
                    data = {
                        orders: [
                            {
                                "id" : 0,
                                "date" : "16 Mar, 2019",
                                "name" : "Elvis Presley",
                                "shipTo" : "Tupelo, MS",
                                "paymentMethod" : "VISA ⠀•••• 3719",
                                "amount" : 312.44
                            },
                            {
                                "id" : 1,
                                "date" : "16 Mar, 2019",
                                "name" : "Paul McCartney",
                                "shipTo" : "London, UK",
                                "paymentMethod" : "VISA ⠀•••• 2574",
                                "amount" : 866.99
                            },
                            {
                                "id" : 2,
                                "date" : "16 Mar, 2019",
                                "name" : "Tom Scholz",
                                "shipTo" : "Boston, MA",
                                "paymentMethod" : "MC ⠀•••• 1253",
                                "amount" : 100.81
                            },
                            {
                                "id" : 3,
                                "date" : "16 Mar, 2019",
                                "name" : "Michael Jackson",
                                "shipTo" : "Gary, IN",
                                "paymentMethod" : "AMEX ⠀•••• 2000",
                                "amount" : 654.39
                            },
                            {
                                "id" : 4,
                                "date" : "15 Mar, 2019",
                                "name" : "Bruce Springsteen",
                                "shipTo" : "Long Branch, NJ",
                                "paymentMethod" : "VISA ⠀•••• 5919",
                                "amount" : 212.79
                            }
                        ]
                    };
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
