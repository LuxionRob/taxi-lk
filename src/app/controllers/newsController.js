const news = [
  {
    title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    date: '05/03/2022',
    view: '72',
    description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'
  },
  {
    title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    date: '05/03/2022',
    view: '72',
    description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'
  },
  {
    title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    date: '05/03/2022',
    view: '72',
    description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'
  },
  {
    title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    date: '05/03/2022',
    view: '72',
    description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'
  },
  {
    title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    date: '05/03/2022',
    view: '72',
    description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'
  },
  {
    title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    date: '05/03/2022',
    view: '72',
    description: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
    imageUrl: 'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/news6-7366.png'
  },
]

class NewsController {
  index(req, res) {
    res.render('tin-tuc', { news: news })
  }
}

module.exports = new NewsController()
