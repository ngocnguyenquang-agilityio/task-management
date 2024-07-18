import { CustomClassType } from '@/types/components';

export const ProjectIcon = ({
  customClass = 'w-2.5 h-2.5',
}: CustomClassType) => (
  <svg
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    className={customClass}
  >
    <path
      d="M18.3334 7.50004C18.3334 7.50004 17.5059 8.24171 15.8509 8.90421L13.5109 9.84087C11.8559 10.5025 11.0275 10.8334 10 10.8334C8.97169 10.8334 8.14419 10.5025 6.48919 9.84087L4.15002 8.90421C2.49419 8.24254 1.66669 7.50004 1.66669 7.50004M1.66669 10.8334C1.66669 10.8334 2.49419 11.575 4.14919 12.2375L6.48919 13.1742C8.14419 13.8359 8.97252 14.1667 10 14.1667C10.795 14.1667 11.47 13.9692 12.5 13.5734M15.8509 12.2375C17.5059 11.5759 18.3334 10.8334 18.3334 10.8334M4.14919 2.76254C2.49419 3.42421 1.66669 3.75504 1.66669 4.16671C1.66669 4.57837 2.49419 4.90837 4.14919 5.57087L6.48919 6.50754C8.14419 7.16921 8.97252 7.50004 10 7.50004C11.0284 7.50004 11.8559 7.16921 13.5109 6.50754L15.8509 5.57087C17.5059 4.90921 18.3334 4.57837 18.3334 4.16671C18.3334 3.75504 17.5059 3.42504 15.8509 2.76254L13.5109 1.82671C11.8559 1.16421 11.0275 0.833374 10 0.833374C9.20502 0.833374 8.53002 1.03087 7.50002 1.42671"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);