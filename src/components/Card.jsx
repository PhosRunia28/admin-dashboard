function Card() {
  const cards = [
    { title: "Data Pegawai", jumlah: 230 },
    { title: "Absensi Hari Ini", jumlah: 0 },
    { title: "Izin Menuggu Konfirmasi", jumlah: 2 },
    { title: "Lembur Menunggu Konfirmasi", jumlah: 1 },
  ];
  const renderedCard = cards.map((card) => {
    return (
      <div className="col-md-3 p-1" key={card.title}>
        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded ">
          <div>
            <h3 className="fs-5">{card.title}</h3>
            <p className="fs-4 text-center">{card.jumlah}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid">
      <div className="row g-3 my-2">{renderedCard}</div>
    </div>
  );
}
export default Card;
