import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Task from "../components/Task";
// import styles from "../styles/Home.module.css";
// import ButtonAddImage from "../components/ButtonAddImage";
// import ShowGalley from "../components/ShowGalley";

export default function Home() {
  const [datenow, setdatenow] = useState("");
  const [dataset, setdataset] = useState([]);
  useEffect(() => {
    getDate();
    getData();
  }, []);

  const getDate = () => {
    function getThaiMonth(month) {
      const months = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];
      return months[month];
    }

    // ฟังก์ชันสำหรับแปลงปี ค.ศ. เป็น พ.ศ.
    function getThaiYear(year) {
      return year + 543;
    }

    // ฟังก์ชันสำหรับการตั้งค่าวันที่ในรูปแบบที่ต้องการ
    function formatThaiDate(date) {
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const thaiMonth = getThaiMonth(month);
      const thaiYear = getThaiYear(year);

      return `วันที่ ${day} เดือน ${thaiMonth} ปี พ.ศ. ${thaiYear}`;
    }

    // ตัวอย่างการใช้งาน
    const today = new Date();
    const thaiFormattedDate = formatThaiDate(today);
    setdatenow(thaiFormattedDate);
  };

  const getData = () => {
    setdataset([
      {
        id: 1,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      },
      {
        id: 2,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      },
      {
        id: 3,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      },
      {
        id: 4,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      },
      {
        id: 5,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      },
      {
        id: 6,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      },
      {
        id: 7,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      },
      {
        id: 8,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      },
      {
        id: 9,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      },
      {
        id: 10,
        Owner: "bas",
        Title: "Create api service",
        Des: "Create Edit Read api for customer service  and auth system",
        Date: "27/07/2023",
        Status: "Pending",
        Problem: null,
      }
    ]);
  };

  return (
    <div>
      <Head>
        <title>Task Track!!</title>
        <meta name="description" content="Task Track!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-5 mx-5">
        <h3 className="text-center">วันนี้ {datenow}</h3>
        <br />
        <Task card={dataset} />
      </div>
    </div>
  );
}
