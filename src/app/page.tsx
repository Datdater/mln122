'use client'
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    key: "origin",
    title: "Nguồn gốc của giá trị thặng dư",
    icon: "/file.svg",
    bg: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80", // old books
    summary: `Surplus value, a cornerstone of Marx's critique of political economy, refers to the value produced by labor over and above the cost of labor power. It is the source of profit in capitalist systems, arising from the exploitation of workers.`,
    more: `Marx argued that capitalists purchase labor power at its value (wages) but extract more value during production, appropriating the difference as surplus value. This process is fundamental to understanding capitalist accumulation and class relations.`
  },
  {
    key: "labor-power",
    title: "Sức lao động như một hàng hóa",
    icon: "/window.svg",
    bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80", // factory
    summary: `In capitalism, labor power is treated as a commodity. Workers sell their capacity to work in exchange for wages, but the value they create often exceeds what they are paid.`,
    more: `The distinction between labor and labor power is crucial. Labor power is the worker's ability to work, which is sold to the capitalist. The actual labor performed generates new value, part of which is appropriated as surplus value.`
  },
  {
    key: "production-process",
    title: "Quá trình sản xuất giá trị thặng dư",
    icon: "/vercel.svg",
    bg: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80", // industry
    summary: `Surplus value is produced in the sphere of production, where workers create more value than the equivalent of their wages. This excess is realized as profit by the capitalist.`,
    more: `The working day is divided into necessary labor (to reproduce the worker's wage) and surplus labor (unpaid labor that creates surplus value). The extension of the working day or intensification of labor increases surplus value.`
  },
  {
    key: "capital-types",
    title: "Vốn hằng số và vốn biến đổi",
    icon: "/globe.svg",
    bg: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=900&q=80", // machinery
    summary: `Marx distinguishes between constant capital (machinery, materials) and variable capital (labor power). Only variable capital produces surplus value.`,
    more: `Constant capital transfers its value to the final product, while variable capital (wages) is the source of new value. The exploitation of labor is thus central to surplus value production.`
  },
  {
    key: "wages",
    title: "Lương",
    icon: "/file.svg",
    bg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80", // coins
    summary: `Wages represent the price of labor power, not labor itself. They are determined by the cost of subsistence and reproduction of the worker.`,
    more: `The wage form obscures the exploitation inherent in capitalism, making it appear as if workers are paid for all their labor, when in fact only necessary labor is compensated.`
  },
  {
    key: "circulation",
    title: "Vòng chu chuyển của vốn",
    icon: "/window.svg",
    bg: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=900&q=80", // abstract
    summary: `Capital circulates through stages: money, commodities, production, and back to money with added surplus value. This cycle drives capitalist accumulation.`,
    more: `The circulation of capital links production and exchange, ensuring the continuous expansion of value. Interruptions in this cycle can lead to crises and instability in the market economy.`
  }
];

function Expandable({ summary, more }: { summary: string; more: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p>{summary}</p>
      <button
        className="mt-2 text-[color:var(--gold)] underline font-bold text-sm"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "Hide" : "Explore More"}
      </button>
      {open && (
        <div className="mt-2 text-[color:var(--grey)] text-sm border-l-4 border-[color:var(--gold)] pl-4 bg-white/70 p-2 rounded shadow-inner">
          {more}
        </div>
      )}
    </div>
  );
}

const partners = [
  { name: "Marx", logo: "/file.svg" },
  { name: "Engels", logo: "/window.svg" },
  { name: "KnowledgeLab", logo: "/globe.svg" },
  { name: "TheoryX", logo: "/vercel.svg" },
];

const keyConcepts = [
  {
    key: "labor-power",
    title: "Labor Power as Commodity",
    icon: "/window.svg",
    img: "/background.jpg",
    desc: `Labor power is sold as a commodity in the market. Workers exchange their capacity to work for wages, but the value they create often exceeds what they are paid.`,
    reverse: false,
  },
  {
    key: "capital-types",
    title: "Constant & Variable Capital",
    icon: "/globe.svg",
    img: "/background.jpg",
    desc: `Constant capital (machinery, materials) transfers value, while variable capital (labor power) creates new value and surplus.`,
    reverse: true,
  },
  {
    key: "capital-circulation",
    title: "Capital Circulation",
    icon: "/vercel.svg",
    img: "/background.jpg",
    desc: `Capital moves through stages: money, commodities, production, and returns as money with surplus value, driving accumulation.`,
    reverse: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--charcoal)] font-serif">
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
                <li><b>Giá trị sử dụng của sức lao động:</b> <span className="text-[color:var(--gold)] font-bold">Là khả năng tạo ra một giá trị mới lớn hơn giá trị bản thân nó.</span> <span className="italic">Đây chính là điều đặc biệt, là 'bí mật' của giá trị thặng dư.</span></li>
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

      {/* Partner Section */}
      {/* <section className="bg-white/80 py-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="text-xl font-bold mb-6 text-[color:var(--charcoal)]">Knowledge Partners</h3>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {partners.map((p) => (
              <div key={p.name} className="grayscale opacity-70 hover:opacity-100 transition">
                <Image src={p.logo} alt={p.name} width={80} height={40} />
                <div className="text-xs text-center mt-2 font-semibold tracking-wide">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      {/* <section className="max-w-5xl mx-auto py-16 px-4 flex flex-col gap-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-[color:var(--brown)]">Khái niệm chính</h3>
        {keyConcepts.map((concept, idx) => (
          <div
            key={concept.key}
            className={`flex flex-col ${concept.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
          >
            <div className="flex-1 min-w-[220px] flex flex-col items-center">
              <Image src={concept.img} alt={concept.title} width={400} height={260} className="rounded-lg shadow-md object-cover" />
              <div className="mt-4 bg-[color:var(--gold)]/20 rounded-full p-3">
                <Image src={concept.icon} alt="icon" width={36} height={36} />
              </div>
            </div>
            <div className="flex-1 min-w-[220px]">
              <h4 className="text-xl font-bold mb-2 text-[color:var(--brown)]">{concept.title}</h4>
              <p className="text-md text-[color:var(--charcoal)]">{concept.desc}</p>
            </div>
          </div>
        ))}
      </section> */}

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
