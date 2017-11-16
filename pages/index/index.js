import testDrive from '../../modules/test-drive'
const app = getApp()

Page({
    data: {
        slides: null,
        entities: null
    },
    readMore(event) {
        wx.navigateTo({
            url: `/pages/vehicles/show?id=${event.target.dataset.id}`
        })
    },
    testDrive,

    onLoad: function() {
        this.setData({
            slides: app.globalData.slides,
            entities: app.globalData.vehicles
        })
    },
})
