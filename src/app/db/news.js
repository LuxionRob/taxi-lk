const IMAGE_BASE_URL = '/images/news/'
function newsData() {
  return [
    {
      title: 'Khu du lịch Đại Nam - Điểm hẹn cuối tuần siêu lý tưởng',
      date: '4/2/2023',
      view: 79,
      image: IMAGE_BASE_URL + 'khu-du-lich-dai-nam.webp',
      description:
        'Khu du lịch Đại Nam còn được biết đến với tên gọi là lạc cảnh Đại Nam Văn Hiến. Cùng đội taxi Long Khánh - Đồng Nai...',
    },
    {
      title: 'Review Hồ Trị An camping đang hot ở Đồng Nai',
      date: '02/04/2023',
      view: '72',
      description: 'Hồ Trị An là hồ nước nhân tạo, chứa nguồn nước của đập thủy điện Trị An.',
      image: IMAGE_BASE_URL + 'ho-tri-an.webp',
    },
    {
      title: 'Các lí do nên chọn đội Taxi Long Khánh',
      date: '02/04/2023',
      view: '72',
      description: '',
      image: IMAGE_BASE_URL + 'taxi-long-khanh-taxi-dong-nai.webp',
    },
    {
      title: 'Đội Taxi Long Khánh thông báo tuyển dụng tài xế lái xe tại Long Khánh',
      date: '14/04/2023',
      view: '21',
      description: 'Nhằm đáp ứng nhu cầu di chuyển tăng cao của khách hàng tại Long Khánh, Đồng Nai. Hãng taxi...',
      image: IMAGE_BASE_URL + 'Tuyen-dung.webp',
    },
  ]
}
module.exports = newsData
