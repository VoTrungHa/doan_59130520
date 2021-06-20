var _ = require('lodash');

exports.SearchSomeThing=(data,search)=>{
   return _.find([
      {
        maTaiKhoan:  'AC-68544-53006' ,
        tenDangNhap: '232fs' ,
        matKhau: [ '$2b$10$ilGPR.nYI5aKKuOO/mq.5.csTRCU2ycDYGFtfpdnxqTy.NHwG/zaC' ],
        trangThai: [ 'true' ],
        Role: [ 'SV' ],
        functions: [ 'sv', 'svgfds' ],
        ngayTao: [ '16-3-2021' ]
      },
      {
         maTaiKhoan: [ 'AC-68544-53006' ],
         tenDangNhap:  '12' ,
         matKhau: [ '$2b$10$ilGPR.nYI5aKKuOO/mq.5.csTRCU2ycDYGFtfpdnxqTy.NHwG/zaC' ],
         trangThai: [ 'true' ],
         Role: [ 'SV' ],
         functions: [ 'sv', 'svgfds' ],
         ngayTao: [ '16-3-2021' ]
       }
    ],function(o) { return o.tenDangNhap === search; })
}