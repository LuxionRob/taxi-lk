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
    {
      title: 'Giới thiệu Đại Chủng Viện Long Khánh - Dịch vụ Taxi Long Khánh chất lượng cao',
      date: '15/04/2023',
      view: '26',
      description:
        'Đại Chủng Viện Long Khánh là một địa chỉ nổi tiếng tại thành phố Long Khánh với hơn 10 năm kinh nghiệm trong lĩnh vực giáo dục...',
      image: IMAGE_BASE_URL + 'dai-chung-vien-Long-Khanh.webp',
    },
    {
      title: 'Đội Taxi Long Khánh - Lựa chọn tuyệt vời cho người đi làm',
      date: '18/04/2023',
      view: '139',
      description:
        'Đối với người đi làm, thời gian là vô cùng quan trọng và không phải lúc nào đi bằng phương tiện cá nhân cũng là lựa chọn tối ưu...',
      image: IMAGE_BASE_URL + 'di-lam.webp',
    },
    {
      title: 'Nghề tài xế và những khó khăn',
      date: '16/04/2023',
      view: '38',
      description:
        'Rong ruổi trên khắp các cung đường kèm theo việc phải chịu áp lực lớn vì tập trung nhiều giờ liền dẫn đến căng thẳng, mệt mỏi… Đây là tâm sự của hầu hết mọi tài xế khi nói đến công việc của mình...',
      image: IMAGE_BASE_URL + 'anh-taxi-taixe.webp',
    },
  ]
}
module.exports = newsData
