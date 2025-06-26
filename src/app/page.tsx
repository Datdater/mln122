'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HTMLFlipBook from 'react-pageflip';

// Component hiệu ứng vàng rơi
const GoldParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 100,
        size: 2 + Math.random() * 4,
        speed: 1 + Math.random() * 2,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-lg"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, Math.random() * 100 - 50],
            opacity: [1, 0.8, 0.6, 0.4, 0.2, 0],
            scale: [1, 1.2, 0.8, 1, 0.6],
          }}
          transition={{
            duration: 8 + particle.speed * 2,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--charcoal)] font-serif">
      {/* Hiệu ứng vàng rơi */}
      <GoldParticles />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full h-[60vh] min-h-[1000px] flex flex-col items-center justify-center text-center relative"
        style={{
          backgroundImage:
            "url('https://hair-salon-fpt.io.vn/uploads/090e2710-c384-4ed7-8410-2f60e198d355_Gemini_Generated_Image_354s6e354s6e354s.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-widest drop-shadow-lg mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            GIÁ TRỊ THẶNG DƯ
          </h1>
          <p className="text-lg sm:text-2xl text-white/90 max-w-2xl mb-8 drop-shadow">
            Giá trị thặng dư trong nền kinh tế thị trường
          </p>
          <a
            href="#introduction"
            className="bg-[color:var(--gold)] text-[color:var(--charcoal)] font-bold px-8 py-3 rounded-full shadow-lg text-lg hover:bg-yellow-600 transition"
          >
            Explore Theory
          </a>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        id="introduction"
        className="max-w-5xl mx-auto py-16 px-4"
      >
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--brown)]">Nguồn gốc của giá trị thặng dư</h2>
          <p className="text-lg text-[color:var(--charcoal)]">
            Là toàn bộ năng lực thể chất, tinh thần tồn tại trong cơ thể người sống để người ta vận dụng sản xuất ra giá trị sử dụng          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex flex-row gap-8 flex-1 justify-center w-full">

            {/* Ảnh 1 */}
            <div className="flex flex-col items-center">
              <Image
                src="https://hair-salon-fpt.io.vn/uploads/1a398d1c-8aad-4ac6-b439-0332546b28e2_Gemini_Generated_Image_9fofra9fofra9fof.jpeg"
                alt="Ảnh phụ Marx"
                width={500}
                height={500}
                className="rounded-full shadow-2xl object-cover border-4 border-[color:var(--gold)] bg-white"
              />
              <p className="mt-2 text-sm text-center text-[color:var(--charcoal)] font-medium">
                Karl Marx - Nhà tư tưởng về giá trị thặng dư
              </p>
            </div>

            {/* Ảnh 2 */}
            <div className="flex flex-col items-center">
              <Image
                src="https://hair-salon-fpt.io.vn/uploads/04877f64-bea3-4fdc-9f95-4bbf87fe3b13_Gemini_Generated_Image_1w34k21w34k21w34%20(1).jpg"
                alt="Ảnh nhà máy cũ"
                width={500}
                height={500}
                className="rounded-xl shadow-2xl object-cover"
              />
              <p className="mt-2 text-sm text-center text-[color:var(--charcoal)] font-medium">
                Nhà máy thời công nghiệp - Nơi khai sinh giá trị thặng dư
              </p>
            </div>

          </div>
        </div>

      </motion.section>

      {/* Labor Power as Commodity Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-16 px-4"
      >

        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:var(--brown)]">Hàng hóa Sức Lao động – Chìa khóa của Giá trị Thặng dư</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg text-[color:var(--charcoal)]">
            <li><b>Khái niệm:</b> Sức lao động là toàn bộ năng lực thể chất và tinh thần của con người dùng để sản xuất ra giá trị sử dụng.</li>
            <li><b>Tại sao sức lao động trở thành hàng hóa?</b>
              <ul className="list-[circle] pl-6 mt-1 text-base">
                <li>Người lao động tự do về thân thể.</li>
                <li>Người lao động không có tư liệu sản xuất để tự làm ra sản phẩm (không có máy chủ, không có bản quyền phần mềm, không có công ty để phân phối sản phẩm phần mềm của riêng mình...).</li>
              </ul>
            </li>
            <li><b>Thuộc tính đặc biệt của hàng hóa Sức lao động:</b>
              <ul className="list-[circle] pl-6 mt-1 text-base">
                <li><b>Giá trị của sức lao động:</b> Được quyết định bởi chi phí để tái sản xuất ra sức lao động (ăn uống, ở, học hành, nuôi con...).</li>
                <li><b>Giá trị sử dụng của sức lao động:</b> <span className="text-[color:var(--gold)] font-bold">Là khả năng tạo ra một giá trị mới lớn hơn giá trị bản thân nó.</span> <span className="italic">Đây chính là điều đặc biệt, là &apos;bí mật&apos; của giá trị thặng dư.</span></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[250px] flex justify-center">
          <Image
            src="https://hair-salon-fpt.io.vn/uploads/5c3644d7-d191-412b-84d2-826dbe2fa471_Gemini_Generated_Image_msjl61msjl61msjl.jpeg"
            alt="Sức lao động icon"
            width={500}
            height={350}
            className="rounded-full bg-[color:var(--gold)]/20 p-6 shadow-lg"
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto py-16 px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-[color:var(--brown)] text-center">
          Quá trình sản xuất giá trị thặng dư trong ngày làm việc của lập trình viên
        </h2>
        {/* Timeline 8 tiếng */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-full max-w-lg">
            <div className="flex h-15 rounded-full overflow-hidden shadow border border-[color:var(--gold)]">
              <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-[color:var(--gold)] to-yellow-200 text-[color:var(--charcoal)] font-bold text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-10 text-[color:var(--charcoal)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  4h tất yếu<br />(1.000.000 VNĐ)
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-[color:var(--brown)] to-yellow-900 text-white font-bold text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  4h thặng dư<br />(1.000.000 VNĐ)
                </span>
              </div>
            </div>
            <div className="flex w-full justify-between mt-2 text-xs text-[color:var(--charcoal)]">
              <span>0h</span>
              <span>8h</span>
            </div>
          </div>
          <div className="mt-4 text-center text-base text-[color:var(--charcoal)]">
            <b>4 giờ lao động tất yếu:</b> Tạo ra giá trị bù đắp lương (1.000.000 VNĐ).<br />
            <b>4 giờ lao động thặng dư:</b> Tạo ra giá trị thặng dư cho công ty (1.000.000 VNĐ).
          </div>
        </div>
        {/* Bảng phân tích giá trị sản phẩm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--charcoal)] flex flex-col items-center">
            <span className="text-3xl mb-2">💻</span>
            <div className="font-bold text-[color:var(--charcoal)]">Tư bản bất biến (c)</div>
            <div className="text-xl font-bold text-[color:var(--brown)]">850.000 VNĐ</div>
            <div className="text-xs text-[color:var(--grey)] mt-1">Thiết bị, phần mềm, chi phí văn phòng</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--gold)] flex flex-col items-center">
            <span className="text-3xl mb-2">👨‍💻</span>
            <div className="font-bold text-[color:var(--charcoal)]">Giá trị sức lao động (v)</div>
            <div className="text-xl font-bold text-[color:var(--gold)]">1.000.000 VNĐ</div>
            <div className="text-xs text-[color:var(--grey)] mt-1">Tiền lương (4h tất yếu)</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--brown)] flex flex-col items-center">
            <span className="text-3xl mb-2">💰</span>
            <div className="font-bold text-[color:var(--charcoal)]">Giá trị thặng dư (m)</div>
            <div className="text-xl font-bold text-[color:var(--brown)]">1.000.000 VNĐ</div>
            <div className="text-xs text-[color:var(--grey)] mt-1">Tạo ra trong 4h thặng dư</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[color:var(--gold)] flex flex-col items-center">
            <span className="text-3xl mb-2">📦</span>
            <div className="font-bold text-[color:var(--charcoal)]">Tổng giá trị sản phẩm</div>
            <div className="text-xl font-bold text-[color:var(--gold)]">2.850.000 VNĐ</div>
            <div className="text-xs text-[color:var(--grey)] mt-1">c + v + m</div>
          </div>
        </div>
        {/* Nhấn mạnh giá trị thặng dư */}
        <div className="text-center my-8">
          <span className="inline-block bg-gradient-to-r from-[color:var(--brown)] to-[color:var(--gold)] text-white font-bold text-lg rounded-full px-8 py-3 shadow-lg border-2 border-white">
            Giá trị thặng dư (m) được tạo ra là: 1.000.000 VNĐ
          </span>
        </div>
        {/* Mô tả ý nghĩa */}
        <div className="text-center text-base text-[color:var(--charcoal)] max-w-2xl mx-auto mt-4 flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-[color:var(--gold)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>
          <span className="italic">Phần giá trị thặng dư này là nguồn gốc lợi nhuận của chủ doanh nghiệp, được tạo ra từ phần lao động không được trả công của lập trình viên.</span>
        </div>
      </motion.section>

      {/* Section trả lời câu hỏi với video */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto py-16 px-4 flex flex-col items-center text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[color:var(--brown)]">Trả lời câu hỏi</h2>
        <p className="mb-6 text-lg text-[color:var(--charcoal)]"> Làm 8 tiếng nhưng sống không đủ: Giá trị thặng dư ở đâu?</p>
        <div className="w-full aspect-video max-w-2xl rounded-xl overflow-hidden shadow-lg mb-4">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/w3m-TF0qCxc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <a
          href="https://www.youtube.com/watch?v=w3m-TF0qCxc&feature=youtu.be"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 bg-[color:var(--gold)] text-[color:var(--charcoal)] font-bold rounded-full shadow hover:bg-yellow-400 transition"
        >
          Xem video đầy đủ trên YouTube
        </a>

        {/* Bảng mức lương tối thiểu vùng 2025 */}
        <div className="w-full overflow-x-auto mt-10">
          <table className="min-w-[600px] w-full border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white">
            <thead>
              <tr className="bg-[color:var(--brown)] text-white">
                <th className="py-3 px-4 text-base font-bold border-r border-[color:var(--gold)]">Vùng</th>
                <th className="py-3 px-4 text-base font-bold border-r border-[color:var(--gold)]">Mức lương tối thiểu tháng<br />(đồng/tháng)</th>
                <th className="py-3 px-4 text-base font-bold">Mức lương tối thiểu giờ<br />(đồng/giờ)</th>
              </tr>
            </thead>
            <tbody className="text-center text-[color:var(--charcoal)]">
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Vùng I</td>
                <td className="py-2 px-4">4.960.000</td>
                <td className="py-2 px-4">23.800</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Vùng II</td>
                <td className="py-2 px-4">4.410.000</td>
                <td className="py-2 px-4">21.200</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Vùng III</td>
                <td className="py-2 px-4">3.860.000</td>
                <td className="py-2 px-4">18.600</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Vùng IV</td>
                <td className="py-2 px-4">3.450.000</td>
                <td className="py-2 px-4">16.600</td>
              </tr>
            </tbody>
          </table>
          <div className="text-xs text-gray-500 mt-2">Nguồn: Dự thảo mức lương tối thiểu vùng năm 2025</div>
        </div>
      </motion.section>

      {/* Book Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto py-16 px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--brown)] mb-4">
            Tóm tắt toàn bộ Lý thuyết Giá trị Thặng dư
          </h2>
          <p className="text-lg text-[color:var(--charcoal)]">
            Khám phá lý thuyết qua từng trang sách
          </p>
        </div>

        <div className="flex justify-center">
          <HTMLFlipBook
            showPageCorners={true}
            disableFlipByClick={false}
            width={700}
            height={900}
            size="fixed"
            minWidth={600}
            maxWidth={1000}
            minHeight={900}
            maxHeight={1200}
            maxShadowOpacity={0.3}
            showCover={true}
            mobileScrollSupport={true}
            className="my-flipbook"
            startPage={0}
            drawShadow={true}
            flippingTime={800}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            style={{ margin: "0 auto" }}
          >
            {/* Bìa sách */}
            <div className="page cover bg-gradient-to-br from-[color:var(--gold)] via-yellow-200 to-[color:var(--gold)] border-4 border-[color:var(--brown)]">
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-[color:var(--charcoal)] mb-4" style={{ fontFamily: 'serif' }}>
                    GIÁ TRỊ THẶNG DƯ
                  </h1>
                  <div className="w-32 h-1 bg-[color:var(--brown)] mx-auto mb-4"></div>
                  <p className="text-xl text-[color:var(--brown)] italic">Lý thuyết kinh tế chính trị</p>
                </div>
                {/* <div className="mt-8">
                  <Image
                    src="https://hair-salon-fpt.io.vn/uploads/1a398d1c-8aad-4ac6-b439-0332546b28e2_Gemini_Generated_Image_9fofra9fofra9fof.jpeg"
                    alt="Karl Marx"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-[color:var(--brown)] shadow-lg"
                  />
                  <p className="mt-4 text-sm text-[color:var(--charcoal)] font-medium">
                    Karl Marx - Nhà tư tưởng vĩ đại
                  </p>
                </div> */}
              </div>
            </div>

            {/* Trang 1 - Chương 1 */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Chương 1: Nguồn gốc của Giá trị Thặng dư
                  </h2>
                  <p className="text-base text-[color:var(--charcoal)] leading-relaxed mb-4">
                    Giá trị thặng dư là phần giá trị mới được tạo ra vượt quá giá trị sức lao động, được tạo ra trong quá trình sản xuất nhưng không được trả công cho người lao động.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">Công thức vận động của tư bản:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold">Lưu thông hàng hóa giản đơn:</p>
                          <p className="text-center bg-white p-2 rounded border">H – T – H</p>
                          <p className="text-xs text-gray-600 mt-1">Mục đích: Giá trị sử dụng</p>
                        </div>
                        <div>
                          <p className="font-semibold">Lưu thông tư bản:</p>
                          <p className="text-center bg-white p-2 rounded border">T – H – T'</p>
                          <p className="text-xs text-gray-600 mt-1">Mục đích: Giá trị lớn hơn</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">Định nghĩa quan trọng:</h3>
                      <ul className="text-sm space-y-2">
                        <li><strong>Tư bản:</strong> Là giá trị mang lại giá trị thặng dư</li>
                        <li><strong>Giá trị thặng dư:</strong> Là phần tăng thêm (T' = T + t, với t ≥ 0)</li>
                        <li><strong>Nguồn gốc:</strong> Không phải từ lưu thông mà từ quá trình sản xuất</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">Tại sao lưu thông không tạo ra giá trị thặng dư?</h3>
                      <p className="text-sm">
                        Trong nền kinh tế thị trường, mỗi người đều vừa là người bán vừa là người mua. 
                        Nếu được lợi khi bán thì sẽ bị thiệt khi mua. Do đó, lưu thông không tạo ra giá trị 
                        tăng thêm trên phạm vi toàn xã hội.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 1
                </div>
              </div>
            </div>

            {/* Trang 2 - Chương 2 */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Chương 2: Sức Lao động - Hàng hóa Đặc biệt
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Định nghĩa sức lao động */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">Định nghĩa:</h3>
                      <p className="text-sm italic text-gray-700 mb-2">
                        "Sức lao động là toàn bộ những năng lực thể chất và tinh thần tồn tại trong cơ thể con người đang sống."
                      </p>
                      <p className="text-xs text-gray-600">- C. Mác</p>
                    </div>

                    {/* Điều kiện trở thành hàng hóa */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Điều kiện trở thành hàng hóa:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <div className="flex items-center mb-2">
                            <span className="w-6 h-6 bg-[color:var(--gold)] text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                            <span className="font-semibold">Tự do về thân thể</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <div className="flex items-center mb-2">
                            <span className="w-6 h-6 bg-[color:var(--gold)] text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                            <span className="font-semibold">Không có tư liệu sản xuất</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Thuộc tính đặc biệt */}
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Thuộc tính đặc biệt:</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Giá trị của sức lao động:</h4>
                          <div className="bg-white p-3 rounded border shadow-sm">
                            <p className="text-sm">Bao gồm: tư liệu sinh hoạt + chi phí đào tạo + chi phí gia đình</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Giá trị sử dụng:</h4>
                          <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm">
                            <p className="text-sm font-bold text-[color:var(--brown)]">
                              Khả năng tạo ra giá trị thặng dư
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 2
                </div>
              </div>
            </div>

            {/* Trang 3 - Chương 3 */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Chương 3: Quá trình Sản xuất Giá trị Thặng dư
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Khái niệm cơ bản */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">Khái niệm:</h3>
                      <p className="text-sm">
                        Quá trình sản xuất giá trị thặng dư là sự thống nhất của quá trình tạo ra và làm tăng giá trị.
                      </p>
                    </div>

                    {/* Thời gian lao động */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Phân chia thời gian lao động:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Thời gian lao động tất yếu:</h4>
                          <p className="text-xs">Thời gian để bù đắp giá trị hàng hóa sức lao động</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Thời gian lao động thặng dư:</h4>
                          <p className="text-xs font-bold">Thời gian tạo ra giá trị thặng dư cho nhà tư bản</p>
                        </div>
                      </div>
                    </div>

                    {/* Ví dụ cụ thể */}
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Ví dụ: Sản xuất sợi</h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Chi phí đầu vào:</h4>
                          <ul className="text-xs space-y-1">
                            <li>• 50 USD: Mua 50 kg bông</li>
                            <li>• 3 USD: Hao mòn máy móc</li>
                            <li>• 15 USD: Mua sức lao động (8 giờ)</li>
                            <li className="font-bold">→ Tổng: 68 USD</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Kết quả sản xuất:</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Giá trị bông chuyển vào: 50 USD</li>
                            <li>• Hao mòn máy móc: 3 USD</li>
                            <li>• Giá trị mới tạo thêm: 15 USD</li>
                            <li className="font-bold">→ Tổng: 68 USD</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 3
                </div>
              </div>
            </div>

            {/* Trang 4 - Chương 3 (tiếp) */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Chương 3: Quá trình Sản xuất Giá trị Thặng dư (tiếp)
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Giá trị thặng dư */}
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Tính toán giá trị thặng dư:</h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Làm thêm 4 giờ:</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Sản phẩm tạo thêm: 50 kg sợi mới</li>
                            <li>• Giá trị bán được: 68 USD + 68 USD = 136 USD</li>
                            <li>• Chi phí thực tế: 50 + 6 + 15 = 121 USD</li>
                            <li className="font-bold text-[color:var(--brown)]">→ Giá trị thặng dư: 136 - 121 = 15 USD</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Kết luận */}
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">Kết luận:</h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Định nghĩa giá trị thặng dư:</h4>
                          <p className="text-sm">
                            Giá trị thặng dư (m) là bộ phận giá trị mới dôi ra ngoài giá trị sức lao động do công nhân tạo ra, là kết quả của lao động không công của công nhân cho nhà tư bản.
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Bản chất:</h4>
                          <p className="text-sm font-bold text-[color:var(--brown)]">
                            Người lao động luôn phải làm việc nhiều hơn mức thời gian cần thiết để tái sản xuất ra sức lao động của mình.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Công thức */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">Công thức:</h3>
                      <div className="   text-center">
                        <p className="text-lg font-bold text-[color:var(--brown)]">
                          m = Giá trị mới - Giá trị sức lao động
                        </p>
                        {/* <p className="text-sm text-gray-600 mt-1">
                          (m: giá trị thặng dư)
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 4
                </div>
              </div>
            </div>

            {/* Trang 5 - Chương 4 */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Chương 4: Bản chất của Giá trị thặng dư
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Bản chất kinh tế - xã hội */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-2">Bản chất kinh tế - xã hội:</h3>
                      <p className="text-sm leading-relaxed">
                        Giá trị thặng dư là kết quả của sự hao phí sức lao động trong sự thống nhất của quá trình tạo ra và làm tăng giá trị. Quá trình này diễn ra trong quan hệ xã hội giữa người mua và người bán hàng hóa sức lao động.
                      </p>
                    </div>

                    {/* Quan hệ giai cấp */}
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Quan hệ giai cấp:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Giai cấp tư sản:</h4>
                          <p className="text-xs">Làm giàu dựa trên cơ sở thuê mướn lao động, mục đích là giá trị thặng dư</p>
                        </div>
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Giai cấp công nhân:</h4>
                          <p className="text-xs">Phải bán sức lao động cho nhà tư bản để sinh sống</p>
                        </div>
                      </div>
                    </div>

                    {/* Tỷ suất giá trị thặng dư */}
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Tỷ suất giá trị thặng dư (m'):</h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Định nghĩa:</h4>
                          <p className="text-xs">Tỷ lệ phần trăm giữa giá trị thặng dư và tư bản khả biến</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm text-center">
                          <p className="text-lg font-bold text-[color:var(--brown)]">
                            m' = (m/v) × 100%
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Hoặc: m' = (t'/t) × 100%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 5
                </div>
              </div>
            </div>

            {/* Trang 6 - Chương 4 (tiếp) */}
            <div className="page bg-white">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[color:var(--brown)] mb-4 border-b-2 border-[color:var(--gold)] pb-2">
                    Chương 4: Bản chất của Giá trị thặng dư (tiếp)
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Khối lượng giá trị thặng dư */}
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Khối lượng giá trị thặng dư (M):</h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Định nghĩa:</h4>
                          <p className="text-xs">Lượng giá trị thặng dư bằng tiền mà nhà tư bản thu được</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-[color:var(--gold)] shadow-sm text-center">
                          <p className="text-lg font-bold text-[color:var(--brown)]">
                            M = m' × V
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            (V: tổng tư bản khả biến)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ý nghĩa */}
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[color:var(--gold)]">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Ý nghĩa:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Tỷ suất (m'):</h4>
                          <p className="text-xs">Phản ánh trình độ khai thác sức lao động làm thuê</p>
                        </div>
                        <div className="bg-white p-3 rounded border shadow-sm">
                          <h4 className="font-semibold text-[color:var(--brown)] mb-2">Khối lượng (M):</h4>
                          <p className="text-xs">Phản ánh quy mô giá trị thặng dư mà chủ tư bản thu được</p>
                        </div>
                      </div>
                    </div>

                    {/* Bảng tóm tắt công thức */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-[color:var(--brown)] mb-3">Tóm tắt công thức:</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs border border-gray-300 bg-white rounded">
                          <thead>
                            <tr className="bg-[color:var(--brown)] text-white">
                              <th className="p-2 border">Tên gọi</th>
                              <th className="p-2 border">Công thức</th>
                              <th className="p-2 border">Ý nghĩa</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border font-semibold">Tỷ suất giá trị thặng dư</td>
                              <td className="p-2 border text-center">m' = (m/v) × 100%</td>
                              <td className="p-2 border">Tỷ lệ giữa giá trị thặng dư và tư bản khả biến</td>
                            </tr>
                            <tr>
                              <td className="p-2 border font-semibold">Tỷ suất (theo thời gian)</td>
                              <td className="p-2 border text-center">m' = (t'/t) × 100%</td>
                              <td className="p-2 border">Tỷ lệ giữa thời gian lao động thặng dư và tất yếu</td>
                            </tr>
                            <tr>
                              <td className="p-2 border font-semibold">Khối lượng giá trị thặng dư</td>
                              <td className="p-2 border text-center">M = m' × V</td>
                              <td className="p-2 border">Tổng giá trị thặng dư thu được từ tổng tư bản khả biến</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[color:var(--grey)] text-center mt-4">
                  Trang 6
                </div>
              </div>
            </div>

            {/* Bìa sau */}
            <div className="page cover bg-gradient-to-br from-[color:var(--brown)] to-[color:var(--charcoal)]">
              <div className="flex flex-col items-center justify-center h-full text-center p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">📖 Cảm ơn bạn đã đọc!</h2>
                <p className="text-lg mb-6">
                  Hy vọng bạn đã hiểu rõ hơn về lý thuyết giá trị thặng dư và tác động của nó đến nền kinh tế hiện đại.
                </p>
                <div className="w-24 h-1 bg-[color:var(--gold)] mx-auto mb-4"></div>
                {/* <p className="text-sm italic">
                  Tư bản không tạo ra giá trị thặng dư, mà chỉ chiếm đoạt nó<br />
                </p> */}
              </div>
            </div>
          </HTMLFlipBook>
        </div>
      </motion.section>

      {/* Final Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full py-16 bg-gradient-to-r from-[color:var(--brown)]/90 to-[color:var(--gold)]/80 flex flex-col items-center justify-center text-center"
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 drop-shadow-lg">Sẵn sàng để tìm hiểu sâu hơn?</h3>
        <p className="text-lg text-white/90 mb-8 max-w-2xl">
          Khám phá lý thuyết giá trị thặng dư và tham gia thảo luận để hiểu cơ sở của kinh tế hiện đại.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#"
            className="bg-white text-[color:var(--brown)] font-bold px-8 py-3 rounded-full shadow-lg text-lg hover:bg-gray-200 transition"
          >
            Read Full Theory
          </a>
          <a
            href="#"
            className="bg-[color:var(--charcoal)] text-white font-bold px-8 py-3 rounded-full shadow-lg text-lg hover:bg-gray-800 transition"
          >
            Join Discussion
          </a>
        </div>
      </motion.section>
    </div>
  );
}
