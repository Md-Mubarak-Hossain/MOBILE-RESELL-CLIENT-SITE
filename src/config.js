export default {
    slots: [
        {
            id: "banner-ad",
            path: "/19968336/header-bid-tag-0",
            sizes: [[728, 90], [970, 90]],
            prebid: [
                {
                    mediaTypes: {
                        banner: {
                            sizes: [[728, 90], [970, 90]]
                        }
                    },
                    bids: [
                        {
                            bidder: "appnexus",
                            params: {
                                placementId: 13144370
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
