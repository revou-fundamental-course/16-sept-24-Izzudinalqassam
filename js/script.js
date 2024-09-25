

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nama = data.get("nama");
      const tglLahir = data.get("tglLahir");
      const kelamin = data.get("kelamin");
      const pesan = data.get("pesan");
  
      // Menampilkan data dalam tabel
      const tabelBody = document.querySelector("#tabel-body");
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${nama}</td>
        <td>${tglLahir}</td>
        <td>${kelamin}</td>
        <td>${pesan}</td>
        <td>
          <button class="hapus-btn">Hapus</button>
        </td>
      `;
      tabelBody.appendChild(row);
  
      // Menambahkan aksi hapus
      const hapusBtn = row.querySelector(".hapus-btn");
      hapusBtn.addEventListener("click", () => {
        row.remove();
        swal({
          title: "Berhasil dihapus!",
          icon: "info",
        });
      });
  

      // Menyembunyikan data dari URL
      const url = window.location.href;
      const params = new URLSearchParams(url);
      params.delete("nama");
      params.delete("tglLahir");
      params.delete("kelamin");
      params.delete("pesan");
      window.history.pushState({}, "", url.split("?")[0]);
    });
  });

  