var express = require('express')
var dateFormat = require('dateformat-util');
var app = express();

var data = {
    data: [
        {
            type: "draft",
            id: "11608",
            attributes: {
                createdDate: "2017-07-26T04:46:45.807-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-27T20:19:04.930-0500"
            },
            relationships: {
                auther: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11608/relationships/auther",
                        related: "http://localhost:3000/11608/auther"
                    },
                    data: null
                },
                note: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11608/relationships/note",
                       related: "http://localhost:3000/11608/note"
                    },
                    data: null
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/draft/11608"
            }
        }
    ],
    included: [],
    meta: {
        totalResourceCount: 1
    },
    links: {}
}

app.get('/drafts', function (req, res) {
    res.json(data);
});

var server = app.listen(3001, function () {
    console.log('listening on port %d', server.address().port);
})