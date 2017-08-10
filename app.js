var express = require('express')
var app = express();

var data = {
    data: [
        {
            type: "draft",
            id: "11088",
            attributes: {
                createdDate: "2017-06-29T03:10:15.905-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-06-29T03:10:16.240-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://172.16.32.100:8080/backstop/api/draft/11088/relationships/note",
                        related: "http://172.16.32.100:8080/backstop/api/draft/11088/note"
                    },
                    data: null
                },
                auther: {
                    links: {
                        self: "http://172.16.32.100:8080/backstop/api/draft/11088/relationships/auther",
                        related: "http://172.16.32.100:8080/backstop/api/draft/11088/auther"
                    },
                    data: null
                }
            },
            links: {
                self: "http://172.16.32.100:8080/backstop/api/draft/11088"
            }
        },
        {
            type: "draft",
            id: "11128",
            attributes: {
                createdDate: "2017-07-06T02:34:18.380-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-06T02:34:18.548-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://172.16.32.100:8080/backstop/api/draft/11128/relationships/note",
                        related: "http://172.16.32.100:8080/backstop/api/draft/11128/note"
                    },
                    data: null
                },
                auther: {
                    links: {
                        self: "http://172.16.32.100:8080/backstop/api/draft/11128/relationships/auther",
                        related: "http://172.16.32.100:8080/backstop/api/draft/11128/auther"
                    },
                    data: null
                }
            },
            links: {
                self: "http://172.16.32.100:8080/backstop/api/draft/11128"
            }
        },
        {
            type: "draft",
            id: "11130",
            attributes: {
                createdDate: "2017-07-06T02:48:16.718-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-10T01:11:41.409-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://172.16.32.100:8080/backstop/api/draft/11130/relationships/note",
                        related: "http://172.16.32.100:8080/backstop/api/draft/11130/note"
                    },
                    data: null
                },
                auther: {
                    links: {
                        self: "http://172.16.32.100:8080/backstop/api/draft/11130/relationships/auther",
                        related: "http://172.16.32.100:8080/backstop/api/draft/11130/auther"
                    },
                    data: null
                }
            },
            links: {
                self: "http://172.16.32.100:8080/backstop/api/draft/11130"
            }
        },
        {
            type: "draft",
            id: "11208",
            attributes: {
                createdDate: "2017-07-17T02:30:45.969-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-17T02:30:46.806-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://172.16.32.100:8080/backstop/api/draft/11208/relationships/note",
                        related: "http://172.16.32.100:8080/backstop/api/draft/11208/note"
                    },
                    data: null
                },
                auther: {
                    links: {
                        self: "http://172.16.32.100:8080/backstop/api/draft/11208/relationships/auther",
                        related: "http://172.16.32.100:8080/backstop/api/draft/11208/auther"
                    },
                    data: null
                }
            },
            links: {
                self: "http://172.16.32.100:8080/backstop/api/draft/11208"
            }
        }
    ],
    included: [],
    meta: {
        totalResourceCount: 4
    },
    links: {}
}

app.get('/backstop/api/draft', function (req, res) {
    res.json(data);
});

var server = app.listen(3001, function () {
    console.log('listening on port %d', server.address().port);
})