const buttonElement = document.getElementById("submit-button");
function egfrWarning() {
  const egfr = Number(document.getElementById("EGFR").value);

  if (egfr >= 60) {
    return "<p>Thận hoạt động bình thường.<p>";
  } else if (egfr >= 45) {
    return "<p>Giai đoạn 3a: Giảm chức năng thận từ nhẹ đến vừa.<p>";
  } else if (egfr >= 30) {
    return "<p>Giai đoạn 3b: Giảm chức năng thận từ vừa đến nặng.<p>";
  } else if (egfr >= 15) {
    return "<p>Giai đoạn 4: Giảm chức năng thận nặng.<p>";
  } else {
    return "<p>Giai đoạn 5: Suy thận, cần lọc máu hoặc ghép thận.<p>";
  }
}
function albuminWarning() {
  const lowerLimit = 34;
  const upperLimit = 54;
  const albumin = Number(document.getElementById("ALBUMIN").value);
  if (albumin < lowerLimit) {
    return "<p>Cảnh báo! Mức Albumin trong máu của bạn thấp hơn mức tham chiếu<p><p>Nguyên nhân có thể bao gồm:</p><ul><p>Suy gan</p><p>Suy tim</p><p>Suy thận mạn tính</p><p>Hội chứng mất protein ruột (Protein losing enteropathy - PLE)</p><p>Suy dinh dưỡng</p></ul><p>Các loại thực phẩm có thể giúp bạn tăng Albumin:</p><ul>  <p>Thịt bò</p><p>Sữa</p><p>Phô mai cottage</p><p>Trứng</p><p>Cá</p><p>Sữa chua</p></ul>";
  } else if (albumin > upperLimit) {
    return "<p>Cảnh báo! Mức Albumin trong máu của bạn cao hơn mức tham chiếu.</p><p>Nguyên nhân Albumin trong máu cao được nhìn thấy trong một số trường hợp:<ul></p><p>Khi cơ thể bị mất nước, mất nước nghiêm trọng.</p><p>Khi cơ thể được bổ sung quá nhiều protein, nó cũng dẫn đến sự gia tăng Albumin.</ul></p><p>Để giảm lượng Albumin, bạn có thể cần chú ý điều chỉnh chế độ ăn uống để giảm protein và bổ sung nước kịp thời, nồng độ albumin sẽ được cân bằng trở lại.</p>";
  } else {
    return "<p>Tuyệt vời! Mức Albumin trong máu của bạn nằm trong khoảng tham chiếu.</p><p>Điều này cho thấy chức năng gan và thận của bạn có thể đang ổn. Tiếp tục duy trì lối sống lành mạnh!</p>";
  }
}
function bunWarning() {
  const lowerLimit = 2.5;
  const upperLimit = 7.1;

  const bun = Number(document.getElementById("BUN").value);
  if (bun < lowerLimit) {
    return "<p>Mức BUN trong máu của bạn thấp hơn mức tham chiếu.</p><p>Điều này có thể do chế độ ăn không đủ protein.</p><p>Tình trạng sức khỏe không tốt hoặc các yếu tố khác có thể là nguyên nhân.</p><p>Hãy thảo luận với bác sĩ của bạn để tìm hiểu thêm.</p>";
  } else if (bun > upperLimit) {
    return "<p>Cảnh báo! Mức BUN trong máu của bạn cao hơn mức tham chiếu.</p><p>Điều này có thể là dấu hiệu cho thấy chức năng thận của bạn có thể bị suy giảm.</p><p>Do chế độ ăn của bạn giàu protein.</p><p>Một số loại thuốc như carbamazepine, methotrexate và tetracycline cũng có thể làm tăng mức BUN.</p><p>Tắc nghẽn trong hệ thống tiết niệu và nhiều nguyên nhân khác cũng có thể là dẫn đến điều này.</p><p>Hãy liên hệ với bác sĩ của bạn để được tư vấn.</p>";
  } else {
    return "<p>Tuyệt vời! Mức BUN trong máu của bạn nằm trong khoảng tham chiếu.</p><p>Điều này cho thấy chức năng thận và chế độ ăn của bạn có thể đang ổn.</p><p>Tiếp tục duy trì lối sống lành mạnh!</p>";
  }
}
function bloodPressureWarning() {
  let ketQua = "";
  const x = Number(document.getElementById("tamthu").value);
  const y = Number(document.getElementById("tamtruong").value);
  if (x < 120 && y < 80) {
    ketQua = "<p>Huyết áp bình thường</p>";
  } else if (x >= 120 && x <= 129 && y < 80) {
    ketQua = "<p>Huyết áp tăng nhẹ</p>";
  } else if ((x >= 130 && x <= 139) || (y >= 80 && y <= 89)) {
    ketQua = "<p>Tăng huyết áp giai đoạn 1</p>";
  } else if (x >= 140 || y >= 90) {
    ketQua = "<p>Tăng huyết áp giai đoạn 2</p>";
  } else if (x > 180 || y > 120) {
    ketQua =
      "<p>Khủng hoảng tăng huyết áp (hãy tham khảo ý kiến bác sĩ ngay lập tức)</p>";
  } else {
    ketQua = "<p>Mức độ huyết áp không rõ</p>";
  }

  if (ketQua !== "<p>Huyết áp bình thường</p>") {
    ketQua +=
      "<ul><p>Tăng huyết áp gây tổn thương và phá hủy các mạch máu trong cơ thể, làm giảm lượng máu cung cấp đến thận.</p><p>Huyết áp tăng cao còn phá hủy bộ lọc ở cầu thận, vì thế không thể loại bỏ tạp chất và nước dư thừa ra ngoài.</p><p>Nước ứ lại càng làm huyết áp tăng cao hơn.</p></ul><p>Do đó, tăng huyết áp có thể dẫn đến suy thận.</p>";
    ketQua +=
      "<p>Để giảm huyết áp bạn có thể:</p><ul><p>Cải thiện chế độ ăn uống của bạn</p><p>Tập thể dục</p><p>Thư giãn</p><p>Không sử dụng rượu; bia; thuốc lá, giảm cân.</p></ul>";
  }

  return ketQua;
}
function kaliWarning() {
  let ketQua = "";
  const Kali = Number(document.getElementById("KALI").value);
  if (Kali < 3.7) {
    ketQua =
      "<p>Mức Kali trong máu thấp.</p>" +
      "<p>Thiếu Kali kéo dài sẽ gây ra rối loạn tim mạch và hệ thần kinh, nghiêm trọng hơn có thể gây liệt cơ, tử vong.</p><p> Để bổ sung có thể hấp thụ các thực phẩm giàu Kali như:</p><ul><p> Khoai tây, khoai lang, cà chua, bắp cải</p><p>Thịt lợn nạc, thịt bò</p><p>Đỗ các loại, khoai tây, khoai lang, gạo, ngô</p><p>Rau dền, bắp cải, cam, chanh, chuối</p><p>Các loại hoa quả, chocolate, đặc biệt là chuối.</p></ul>";
  } else if (Kali > 5.2 && Kali <= 5.5) {
    ketQua = "<p>Mức Kali trong máu cao</p>";
  } else if (Kali > 5.5) {
    ketQua =
      "<p>Mức Kali trong máu rất cao.</p><p> Những người bị bệnh thận mãn tính (CKD) có nguy cơ cao bị tăng Kali máu.</p><p>Việc dư thừa Kali ở mức độ lớn sẽ ảnh hưởng nghiêm trọng đến sức khỏe.</p><p>Kali được đào thải 90% qua thận và 10% qua phân.</p><p> Nếu tỉ lệ Kali của bạn cao hãy chú ý và thăm khám sức khỏe thường xuyên nhé.</p>";
  } else {
    ketQua = "<p>Mức Kali trong máu bình thường</p>";
  }

  return ketQua;
}

function canxiWarning() {
  let ketQua = "";
  const canxi = Number(document.getElementById("CANXI").value);
  if (canxi < 2.2) {
    ketQua =
      "<p>Mức canxi trong máu thấp.</p>" +
      "<p>Thận khỏe mạnh thay đổi vitamin D thu được từ thực phẩm và ánh sáng mặt trời tiếp xúc với một dạng hoạt động.</p><p> Khi một người bị suy giảm chức năng thận hoặc suy thận mãn tính, thận không thể tạo ra đủ vitamin D hoạt động.</p>" +
      "<p>Với sự tiến triển của bệnh thận mãn tính, thận tạo ra vitamin D hoạt động ngày càng ít hơn, dẫn đến nồng độ vitamin D trong huyết thanh bất thường.</p><p>Kết quả là, với sự suy giảm chức năng thận, không có đủ vitamin D hoạt động để giúp hấp thụ canxi.</p><p> Do đó, thiếu vitamin D khiến cơ thể hấp thụ ít canxi hơn, từ đó dẫn đến lượng canxi huyết thanh thấp.</p>";
  } else if (canxi > 2.6) {
    ketQua =
      "<p>Mức canxi trong máu cao</p>" +
      "<p>Bạn nên:</p><ul><p>Điều chỉnh chế độ ăn để giảm lượng canxi tiêu thụ.</p><p>Tập thể dục đều đặn</p><p>Đi kiểm tra định kì</p></ul>";
  } else {
    ketQua = "<p>Mức canxi trong máu bình thường</p>";
  }

  return ketQua;
}

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  let result = "";
  result += "<p><b>Thận:</b><p>" + egfrWarning();
  result += "<p><b>Albumin:</b></p>" + albuminWarning();
  result += "<p><b>BUN:</b></p>" + bunWarning();
  result += "<p><b>Huyết áp:</b></p>" + bloodPressureWarning();
  result += "<p><b>Kali:</b></p>" + kaliWarning();
  result += "<p><b>Canxi:</b></p>" + canxiWarning();
  const resultBox = document.querySelector(".result-box");
  // console.log(resultBox);
  resultBox.innerHTML = `${result}`;
});
