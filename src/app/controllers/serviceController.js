const services = [
  {
    title: 'DỊCH VỤ TAXI LONG KHÁNH',
    description:
      'Taxi Long Khánh, Taxi Long Khánh Đường Dài, Taxi Đưa Đón Sân Bay Giá Rẻ Uy Tín – Dịch Vụ Grab Taxi Chuyên Nghiệp Chất Lượng Cao Gọi Ngay Số 0924.677.776 Có Xe Ngay 5 Phút',
    image:
      'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/giaxetoyotafortuner2020otocomvn1f722-5947.jpeg',
  },
  {
    title: 'Dịch vụ Taxi Xuân Lộc',
    description:
      'Taxi Xuân Lộc uy tín, chuyên nghiệp, giá rẻ được hàng nghìn người sử dụng và đánh giá cao. Gọi ngay 0924677776 để đặt xe ngay sau 5 phút.',
    image:
      'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/giaxetoyotafortuner2020otocomvn1f722-5947.jpeg',
  },
  {
    title: 'DỊCH VỤ THUÊ XE DU LỊCH',
    description:
      'Grab taxi Long Khánh - Đồng Nai đơn vị cho thuê xe du lịch tại LONG KHÁNH - ĐỒNG NAI cung cấp đa dạng các loại xe từ 4 đến 45 chỗ. Các xe đều là xe đời mới, sạch sẽ và đầy đủ tiện nghi, êm ái trên mọi hành trình. Chúng tôi tự tin là mình...',
    image:
      'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/giaxetoyotafortuner2020otocomvn1f722-5947.jpeg',
  },
  {
    title: 'DỊCH VỤ THUÊ XE CƯỚI',
    description:
      'Chúng tôi là một công ty cho thuê xe uy tín lâu năm tại TP LONG KHÁNH - Đồng Nai, vì vậy khi sử dụng dịch vụ thuê xe cưới của chúng tôi Quý Khách có thể hoàn toàn an tâm vì ngoài công việc phục vụ ân cần chu đáo, chúng tôi luôn có những món...',
    image:
      'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/giaxetoyotafortuner2020otocomvn1f722-5947.jpeg',
  },
  {
    title: 'DỊCH VỤ THUÊ XE PHỤC VỤ LỄ HỘI',
    description:
      'Grab Taxi Long Khánh - Đồng Nai là một đơn vị cho thuê xe tháng chuyên nghiệp tại TP Long Khánh và các huyện lân cân ở Đồng Nai. Với kinh nghiệm và sự tận tâm phục vụ của đội ngũ nhân viên điều hành, lái xe của chúng tôi, chúng tôi tin chắc...',
    image:
      'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/giaxetoyotafortuner2020otocomvn1f722-5947.jpeg',
  },
  {
    title: 'GRAB-TAXI ĐI BỆNH VIỆN, SÂN BAY',
    description: 'Grab-taxi đi bệnh viện, sân bay',
    image:
      'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/giaxetoyotafortuner2020otocomvn1f722-5947.jpeg',
  },
  {
    title: 'GRAB-TAXI CÁC TỈNH LÂN CẬN',
    description: 'Grab-taxi các tỉnh lân cận',
    images:
      'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/giaxetoyotafortuner2020otocomvn1f722-5947.jpeg',
  },
  {
    title: 'TAXI',
    description:
      'Grab Taxi Long Khánh luôn mang đến giá thành thấp nhất, chất lượng cao nhất, phù hợp với mọi đối tượng khách hàng. Quý Khách Hàng gọi cho chúng tôi qua số 0924 677 776 để cảm nhận chất lượng dịch vụ taxi giá rẻ nhé. Phục vụ taxi 24h chạy...',
    image:
      'https://taxilongkhanh.vn/thumbs/400x280x1/upload/baiviet/giaxetoyotafortuner2020otocomvn1f722-5947.jpeg',
  },
]

class ServiceController {
  index(req, res) {
    res.render('dich-vu', {
      services: services,
    })
  }
}

module.exports = new ServiceController()
