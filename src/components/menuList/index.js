import MenuItem from '../menuItem';
const Items = [
  {
    href: '/',
    title: 'Trang chủ',
  },
  {
    href: '/pages/gioi-thieu',
    title: 'Giới thiệu',
  },
  {
    href: '/collections/all',
    title: 'Sản phẩm',
  },
  {
    href: '/blogs/tat-ca-bai-viet',
    title: 'Bài viết',
  },
  {
    href: '/pages/lien-he',
    title: 'Liên hệ',
  },
  {
    href: '/pages/osifood-tuyen-dung',
    title: 'Tuyển dụng',
  },
];
const MenuList = () => {
  return (
    <ul className="menulist-cate">
      {Items.map((item, index) => (
        <MenuItem key={index} href={item.href} title={item.title} />
      ))}
    </ul>
  );
};
export default MenuList;
