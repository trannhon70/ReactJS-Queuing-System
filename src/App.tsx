import React from 'react';
import 'antd/dist/antd.css';
import Login from './components/pages/login/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Forgot } from './components/pages/forgot/Forgot';
import ResetPassword from './components/pages/resetPassword/ResetPassword';

import { Menu } from './components/template/layout/Menu';
import BaoCao from './components/pages/baoCao/BaoCao';
import DashBoard from './components/pages/dashBoard/DashBoard';
import Capso from './components/pages/capSo/Capso';
import Dichvu from './components/pages/dichVu/Dichvu';
import HeThong from './components/pages/heThong/HeThong';
import ThietBi from './components/pages/thietBi/ThietBi';
import AddThietBi from './components/pages/thietBi/addThietBi/AddThietBi';
import AddDichVu from './components/pages/dichVu/addDichVu/AddDichVu';
import { ThongTinNguoiDung } from './components/pages/thongTinNguoiDung/ThongTinNguoiDung';
import AddCapSo from './components/pages/capSo/addCapSo/AddCapSo';

import { createBrowserHistory } from 'history';
import NotFound from './components/pages/notFound/NotFound';
import DashBoardChartNgay from './components/pages/dashBoard/dashBoardChart/DashBoardChartNgay';
import DashBoardChartTuan from './components/pages/dashBoard/dashBoardChart/DashBoardChartTuan';
import DashBoardChartThang from './components/pages/dashBoard/dashBoardChart/DashBoardChartThang';
import QuanLyVaiTro from './components/pages/quanLyVaiTro/QuanLyVaiTro';
import AddVaiTro from './components/pages/quanLyVaiTro/addVaiTro/AddVaiTro';
import QuanLyTaiKhoan from './components/pages/quanLyTaiKhoan/QuanLyTaiKhoan';
import AddTaiKhoan from './components/pages/quanLyTaiKhoan/addTaiKhoan/AddTaiKhoan';
import NhatKyNguoiDung from './components/pages/nhatKyNguoiDung/NhatKyNguoiDung';
import DetailThietBi from './components/pages/thietBi/detailThietBi/DetailThietBi';
import UpdateThietBi from './components/pages/thietBi/updateThietBi/UpdateThietBi';
import DetailDichVu from './components/pages/dichVu/detailDichVu/DetailDichVu';
import UpdateDichVu from './components/pages/dichVu/updateDichVu/UpdateDichVu';
import DetailCapSo from './components/pages/capSo/detailCapSo/DetailCapSo';
import UpdateVaiTro from './components/pages/quanLyVaiTro/updateVaiTro/UpdateVaiTro';
import UpdateTaiKhoan from './components/pages/quanLyTaiKhoan/updateTaiKhoan/UpdateTaiKhoan';

export const history = createBrowserHistory();




const App: React.FunctionComponent = () => {
  const thietBiName ={
    thietBi:'Danh s??ch thi???t b???',
    chiTiet:'Chi ti???t thi???t b???',
    capNhat:'C???p nh???t thi???t b???',
    them:'Th??m thi???t b???'
  }
  const dichVuName={
    danhSach:'Danh s??ch d???ch v???',
    them:'Th??m d???ch v???',
    chiTiet:'Chi ti???t',
    capNhat:'C???p nh???t'
  }

  const capSoName = {
    danhSach:'Danh s??ch c???p s???',
    capSo:'C???p s??? m???i ',
    chiTiet:'Chi ti???t '
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} >
          <Route path='/' element={<DashBoard  />} >
            <Route path='/' element={<DashBoardChartNgay />} />
            <Route path='/1' element={<DashBoardChartTuan />} />
            <Route path='/2' element={<DashBoardChartThang />} />
            
          </Route>
          <Route path='/thietbi' element={<ThietBi name={thietBiName}/>} />
          <Route path='/thietbi/themthietbi' element={<AddThietBi name={thietBiName} />} />
          <Route path='/thietbi/detailthietbi/:id' element={<DetailThietBi name={thietBiName}/>} />
          <Route path='/thietbi/capnhatthietbi' element={<UpdateThietBi  name={thietBiName} />} />

          <Route path='/dichvu' element={<Dichvu name={dichVuName}/>} />
          <Route path='/dichvu/themdichvu' element={<AddDichVu name={dichVuName} />} />
          <Route path='/dichvu/detaildichvu' element={<DetailDichVu name={dichVuName} />} />
          <Route path='/dichvu/updatedichvu' element={<UpdateDichVu name={dichVuName} />} />

          <Route path='/capso' element={<Capso name= {capSoName} />} />
          <Route path='/capso/capsomoi' element={<AddCapSo name= {capSoName} />} />
          <Route path='/capso/detailcapso' element={<DetailCapSo name= {capSoName} />} />

          <Route path='/baocao' element={<BaoCao />} />

          <Route path='/hethong' element={<HeThong />} />

          <Route path='/thongtinnguoidung' element={<ThongTinNguoiDung />} />

          <Route path='/quanlyvaitro' element={<QuanLyVaiTro />} />
          <Route path='/quanlyvaitro/themvaitro' element={<AddVaiTro />} />
          <Route path='/quanlyvaitro/updatevaitro' element={<UpdateVaiTro />} />

          <Route path='/quanlytaikhoan' element={<QuanLyTaiKhoan />} />
          <Route path='/quanlytaikhoan/themtaikhoan' element={<AddTaiKhoan />} />
          <Route path='/quanlytaikhoan/updatetaikhoan' element={<UpdateTaiKhoan />} />

          <Route path='/nhatkynguoidung' element={<NhatKyNguoiDung />} />
         

          {/* no other router match */}
          <Route path='*' element={<NotFound />} />

        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/reset' element={<ResetPassword />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
