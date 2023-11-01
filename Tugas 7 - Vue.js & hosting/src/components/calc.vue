<template>
    <div class="wrap">
        <div class="inside-wrap">
            <input type="text" id="kotak" disabled>
            <br><br>
            <p>
            <input type="button" value="1" @click="tampil('1')">
            <input type="button" value="2" @click="tampil('2')">
            <input type="button" value="3" @click="tampil('3')">
            </p>
            <p>
            <input type="button" value="4" @click="tampil('4')">
            <input type="button" value="5" @click="tampil('5')">
            <input type="button" value="6" @click="tampil('6')">
            </p><p>
            <input type="button" value="7" @click="tampil('7')">
            <input type="button" value="8" @click="tampil('8')">
            <input type="button" value="9" @click="tampil('9')">
            </p>
            <input type="button" value="+" @click="tampil('+')">
            <input type="button" value="-" @click="tampil('-')">
            <input type="button" value="*" @click="tampil('*')">
            <input type="button" value="/" @click="tampil('/')">
            <input type="button" id="hapus" value="C" @click="hapus()">
            <input type="button" value="=" @click="hitung()">
        </div>
    </div>
</template>

    <script>
export default {
    methods: {
        tampil(value) {
            let nilai = document.getElementById("kotak");
            nilai.value = nilai.value + value;
        },

        hapus() {
            let kosong = document.getElementById("kotak");
            kosong.value = "";
        },

        hitung() {
            let a = document.getElementById("kotak");
            let hasil = eval(a.value);
            document.getElementById("kotak").value = hasil;
        },
    }
}
    </script>

