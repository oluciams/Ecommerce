export const CartIcon = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="26"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
    </svg>
  );
}

export const CartTrash = (): JSX.Element => {
  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const CheckCart = (): JSX.Element => {
  return (
    <svg
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.877104 6.28555C1.65815 5.50451 2.92448 5.50451 3.70553 6.28555L7.94817 10.5282L17.8477 0.6287C18.6287 -0.152349 19.895 -0.152348 20.6761 0.6287C21.4571 1.40975 21.4571 2.67608 20.6761 3.45713L7.94817 16.185L0.877104 9.11398C0.0960556 8.33293 0.0960556 7.0666 0.877104 6.28555Z"
        fill="white"
      />
    </svg>
  );
}