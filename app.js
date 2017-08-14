var express = require('express')
var app = express();

var data = {
    data: [
        {
            type: "draft",
            id: "11128",
            attributes: {
                createdDate: "2017-06-29T02:41:43.658-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-24T02:22:35.640-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11128/relationships/note",
                        related: "http://localhost:8080/backstop/api/draft/11128/note"
                    },
                    data: {
                        type: "notes",
                        id: "11128"
                    }
                },
                auther: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11128/relationships/auther",
                        related: "http://localhost:8080/backstop/api/draft/11128/auther"
                    },
                    data: {
                        type: "system-users",
                        id: "51683"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/draft/11128"
            }
        }, {
            type: "draft",
            id: "11130",
            attributes: {
                createdDate: "2017-06-29T02:43:22.884-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-24T02:22:18.164-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11130/relationships/note",
                        related: "http://localhost:8080/backstop/api/draft/11130/note"
                    },
                    data: {
                        type: "notes",
                        id: "11130"
                    }
                },
                auther: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11130/relationships/auther",
                        related: "http://localhost:8080/backstop/api/draft/11130/auther"
                    },
                    data: {
                        type: "system-users",
                        id: "51683"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/draft/11130"
            }
        }, {
            type: "draft",
            id: "11168",
            attributes: {
                createdDate: "2017-07-10T22:31:03.808-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-24T02:21:56.622-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11168/relationships/note",
                        related: "http://localhost:8080/backstop/api/draft/11168/note"
                    },
                    data: {
                        type: "notes",
                        id: "11168"
                    }
                },
                auther: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11168/relationships/auther",
                        related: "http://localhost:8080/backstop/api/draft/11168/auther"
                    },
                    data: {
                        type: "system-users",
                        id: "51683"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/draft/11168"
            }
        }, {
            type: "draft",
            id: "11208",
            attributes: {
                createdDate: "2017-07-13T21:15:26.210-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-24T02:22:07.629-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11208/relationships/note",
                        related: "http://localhost:8080/backstop/api/draft/11208/note"
                    },
                    data: {
                        type: "notes",
                        id: "11208"
                    }
                },
                auther: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11208/relationships/auther",
                        related: "http://localhost:8080/backstop/api/draft/11208/auther"
                    },
                    data: {
                        type: "system-users",
                        id: "51683"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/draft/11208"
            }
        }, {
            type: "draft",
            id: "11248",
            attributes: {
                createdDate: "2017-07-24T20:22:21.030-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-24T20:22:21.074-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11248/relationships/note",
                        related: "http://localhost:8080/backstop/api/draft/11248/note"
                    },
                    data: {
                        type: "notes",
                        id: "11248"
                    }
                },
                auther: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11248/relationships/auther",
                        related: "http://localhost:8080/backstop/api/draft/11248/auther"
                    },
                    data: {
                        type: "system-users",
                        id: "51683"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/draft/11248"
            }
        }, {
            type: "draft",
            id: "11608",
            attributes: {
                createdDate: "2017-07-26T04:46:45.807-0500",
                attachedTo: "Abbott, William1",
                userPermittedToReview: "tBackstop Advisors FOF Demo SuperAdmin",
                eventDate: "2017-07-27T20:19:04.930-0500"
            },
            relationships: {
                note: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11608/relationships/note",
                        related: "http://localhost:8080/backstop/api/draft/11608/note"
                    },
                    data: {
                        type: "notes",
                        id: "11608"
                    }
                },
                auther: {
                    links: {
                        self: "http://localhost:8080/backstop/api/draft/11608/relationships/auther",
                        related: "http://localhost:8080/backstop/api/draft/11608/auther"
                    },
                    data: {
                        type: "system-users",
                        id: "51683"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/draft/11608"
            }
        }
    ],
    included: [
        {
            type: "system-users",
            id: "51683",
            attributes: {
                firstName: "Backstop Advisors FOF Demo",
                lastName: "SuperAdmin",
                name: "SuperAdmin"
            },
            links: {
                self: "http://localhost:8080/backstop/api/system-users/51683"
            }
        }, {
            type: "notes",
            id: "11128",
            attributes: {
                linkedResources: [],
                topOfList: false,
                createdTimestamp: "2017-06-29T02:41:43.658-0500",
                description: "bodybbsss ",
                modifiedTimestamp: "2017-07-24T02:22:35.640-0500",
                regardingResource: {
                    type: "people",
                    id: "790705"
                },
                title: "test title",
                activityTags: [],
                effectiveDate: "2017-06-29T00:00:00.000-0500",
                permissionBucket: "Public"
            },
            relationships: {
                historyEvents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11128/relationships/historyEvents",
                        related: "http://localhost:8080/backstop/api/notes/11128/historyEvents"
                    }
                },
                tasks: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11128/relationships/tasks",
                        related: "http://localhost:8080/backstop/api/notes/11128/tasks"
                    }
                },
                template: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11128/relationships/template",
                        related: "http://localhost:8080/backstop/api/notes/11128/template"
                    }
                },
                author: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11128/relationships/author",
                        related: "http://localhost:8080/backstop/api/notes/11128/author"
                    }
                },
                modifiedBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11128/relationships/modifiedBy",
                        related: "http://localhost:8080/backstop/api/notes/11128/modifiedBy"
                    }
                },
                ccedUsers: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11128/relationships/ccedUsers",
                        related: "http://localhost:8080/backstop/api/notes/11128/ccedUsers"
                    }
                },
                createdBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11128/relationships/createdBy",
                        related: "http://localhost:8080/backstop/api/notes/11128/createdBy"
                    }
                },
                documents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11128/relationships/documents",
                        related: "http://localhost:8080/backstop/api/notes/11128/documents"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/notes/11128"
            }
        }, {
            type: "notes",
            id: "11130",
            attributes: {
                linkedResources: [],
                topOfList: false,
                createdTimestamp: "2017-06-29T02:43:22.884-0500",
                description: "body ",
                modifiedTimestamp: "2017-07-24T02:22:18.164-0500",
                regardingResource: {
                    type: "organizations",
                    id: "790255"
                },
                title: "test pattern title",
                activityTags: [],
                effectiveDate: "2017-06-29T00:00:00.000-0500",
                permissionBucket: "Public"
            },
            relationships: {
                historyEvents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11130/relationships/historyEvents",
                        related: "http://localhost:8080/backstop/api/notes/11130/historyEvents"
                    }
                },
                tasks: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11130/relationships/tasks",
                        related: "http://localhost:8080/backstop/api/notes/11130/tasks"
                    }
                },
                template: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11130/relationships/template",
                        related: "http://localhost:8080/backstop/api/notes/11130/template"
                    }
                },
                author: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11130/relationships/author",
                        related: "http://localhost:8080/backstop/api/notes/11130/author"
                    }
                },
                modifiedBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11130/relationships/modifiedBy",
                        related: "http://localhost:8080/backstop/api/notes/11130/modifiedBy"
                    }
                },
                ccedUsers: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11130/relationships/ccedUsers",
                        related: "http://localhost:8080/backstop/api/notes/11130/ccedUsers"
                    }
                },
                createdBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11130/relationships/createdBy",
                        related: "http://localhost:8080/backstop/api/notes/11130/createdBy"
                    }
                },
                documents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11130/relationships/documents",
                        related: "http://localhost:8080/backstop/api/notes/11130/documents"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/notes/11130"
            }
        }, {
            type: "notes",
            id: "11168",
            attributes: {
                linkedResources: [],
                topOfList: false,
                createdTimestamp: "2017-07-10T22:31:03.808-0500",
                description: "",
                modifiedTimestamp: "2017-07-24T02:21:56.622-0500",
                regardingResource: {
                    type: "people",
                    id: "790661"
                },
                title: "draft",
                activityTags: [],
                effectiveDate: "2017-07-11T00:00:00.000-0500",
                permissionBucket: "Public"
            },
            relationships: {
                historyEvents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11168/relationships/historyEvents",
                        related: "http://localhost:8080/backstop/api/notes/11168/historyEvents"
                    }
                },
                tasks: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11168/relationships/tasks",
                        related: "http://localhost:8080/backstop/api/notes/11168/tasks"
                    }
                },
                template: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11168/relationships/template",
                        related: "http://localhost:8080/backstop/api/notes/11168/template"
                    }
                },
                author: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11168/relationships/author",
                        related: "http://localhost:8080/backstop/api/notes/11168/author"
                    }
                },
                modifiedBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11168/relationships/modifiedBy",
                        related: "http://localhost:8080/backstop/api/notes/11168/modifiedBy"
                    }
                },
                ccedUsers: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11168/relationships/ccedUsers",
                        related: "http://localhost:8080/backstop/api/notes/11168/ccedUsers"
                    }
                },
                createdBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11168/relationships/createdBy",
                        related: "http://localhost:8080/backstop/api/notes/11168/createdBy"
                    }
                },
                documents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11168/relationships/documents",
                        related: "http://localhost:8080/backstop/api/notes/11168/documents"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/notes/11168"
            }
        }, {
            type: "notes",
            id: "11248",
            attributes: {
                linkedResources: [
                    {
                        type: "people",
                        id: "790661"
                    }
                ],
                topOfList: false,
                createdTimestamp: "2017-07-24T20:22:21.030-0500",
                description: "",
                modifiedTimestamp: "2017-07-24T20:22:21.074-0500",
                regardingResource: {
                    type: "people",
                    id: "790661"
                },
                title: "aaa",
                activityTags: [],
                effectiveDate: "2017-07-25T00:00:00.000-0500",
                permissionBucket: "Public"
            },
            relationships: {
                historyEvents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11248/relationships/historyEvents",
                        related: "http://localhost:8080/backstop/api/notes/11248/historyEvents"
                    }
                },
                tasks: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11248/relationships/tasks",
                        related: "http://localhost:8080/backstop/api/notes/11248/tasks"
                    }
                },
                template: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11248/relationships/template",
                        related: "http://localhost:8080/backstop/api/notes/11248/template"
                    }
                },
                author: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11248/relationships/author",
                        related: "http://localhost:8080/backstop/api/notes/11248/author"
                    }
                },
                modifiedBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11248/relationships/modifiedBy",
                        related: "http://localhost:8080/backstop/api/notes/11248/modifiedBy"
                    }
                },
                ccedUsers: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11248/relationships/ccedUsers",
                        related: "http://localhost:8080/backstop/api/notes/11248/ccedUsers"
                    }
                },
                createdBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11248/relationships/createdBy",
                        related: "http://localhost:8080/backstop/api/notes/11248/createdBy"
                    }
                },
                documents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11248/relationships/documents",
                        related: "http://localhost:8080/backstop/api/notes/11248/documents"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/notes/11248"
            }
        }, {
            type: "notes",
            id: "11208",
            attributes: {
                linkedResources: [],
                topOfList: false,
                createdTimestamp: "2017-07-13T21:15:26.210-0500",
                description: "asdf ",
                modifiedTimestamp: "2017-07-24T02:22:07.629-0500",
                regardingResource: {
                    type: "people",
                    id: "790661"
                },
                title: "asdfa",
                activityTags: [],
                effectiveDate: "2017-07-06T00:00:00.000-0500",
                permissionBucket: "Public"
            },
            relationships: {
                historyEvents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11208/relationships/historyEvents",
                        related: "http://localhost:8080/backstop/api/notes/11208/historyEvents"
                    }
                },
                tasks: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11208/relationships/tasks",
                        related: "http://localhost:8080/backstop/api/notes/11208/tasks"
                    }
                },
                template: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11208/relationships/template",
                        related: "http://localhost:8080/backstop/api/notes/11208/template"
                    }
                },
                author: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11208/relationships/author",
                        related: "http://localhost:8080/backstop/api/notes/11208/author"
                    }
                },
                modifiedBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11208/relationships/modifiedBy",
                        related: "http://localhost:8080/backstop/api/notes/11208/modifiedBy"
                    }
                },
                ccedUsers: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11208/relationships/ccedUsers",
                        related: "http://localhost:8080/backstop/api/notes/11208/ccedUsers"
                    }
                },
                createdBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11208/relationships/createdBy",
                        related: "http://localhost:8080/backstop/api/notes/11208/createdBy"
                    }
                },
                documents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11208/relationships/documents",
                        related: "http://localhost:8080/backstop/api/notes/11208/documents"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/notes/11208"
            }
        }, {
            type: "notes",
            id: "11608",
            attributes: {
                linkedResources: [],
                topOfList: false,
                createdTimestamp: "2017-07-26T04:46:45.807-0500",
                description: "",
                modifiedTimestamp: "2017-07-27T20:19:04.930-0500",
                regardingResource: {
                    type: "people",
                    id: "790661"
                },
                title: "abab",
                activityTags: [],
                effectiveDate: "2017-07-26T00:00:00.000-0500",
                permissionBucket: "Public"
            },
            relationships: {
                historyEvents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11608/relationships/historyEvents",
                        related: "http://localhost:8080/backstop/api/notes/11608/historyEvents"
                    }
                },
                tasks: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11608/relationships/tasks",
                        related: "http://localhost:8080/backstop/api/notes/11608/tasks"
                    }
                },
                template: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11608/relationships/template",
                        related: "http://localhost:8080/backstop/api/notes/11608/template"
                    }
                },
                author: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11608/relationships/author",
                        related: "http://localhost:8080/backstop/api/notes/11608/author"
                    }
                },
                modifiedBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11608/relationships/modifiedBy",
                        related: "http://localhost:8080/backstop/api/notes/11608/modifiedBy"
                    }
                },
                ccedUsers: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11608/relationships/ccedUsers",
                        related: "http://localhost:8080/backstop/api/notes/11608/ccedUsers"
                    }
                },
                createdBy: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11608/relationships/createdBy",
                        related: "http://localhost:8080/backstop/api/notes/11608/createdBy"
                    }
                },
                documents: {
                    links: {
                        self: "http://localhost:8080/backstop/api/notes/11608/relationships/documents",
                        related: "http://localhost:8080/backstop/api/notes/11608/documents"
                    }
                }
            },
            links: {
                self: "http://localhost:8080/backstop/api/notes/11608"
            }
        }
    ],
    meta: {
        totalResourceCount: 6
    },
    links: {}
}

app.get('/backstop/api/draft', function (req, res) {
    res.json(data);
});

var server = app.listen(3001, function () {
    console.log('listening on port %d', server.address().port);
})