import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='rounded-full object-cover'
        height={50}
        width={50}
        src='https://lh3.googleusercontent.com/sGBtURhBuIRLlbxBvNyQ7OP2h9OfHhwy1AGD8MnccLoWge5XPeuSfpWHphPoJJ7r25ltDEQM8eG4FFeekQaySLTxXGB_-76lTYyzPlVWsCyZdbxoNqRzery8gDn8qeDefQ4knxtj1e5WxJL5qeUtj2LbrZ0_iM8Wl72vQ4G4_GhqrmTxBtZYefi_Qbjrr-jIEWSaFRSnhbboUpc0rH3FnDFGbcDaAh7IRCwV2tKEymRQvHRuCCQQT_2nxS8zM8H40gojYnw0PZ211GZUjfj38o0sUo66dzLjkyUvrOSO6AO-CR7rim7GcklcV3jezwFURiAZBMMJHiQNQFpQruTdb_uTHARbtvvN6pxFC7Uvw096y774MhOVe7SQxKOoD_BlTM3GY6NOFuh6T1hJHB41QxBYeqNOfDUwg4Z8P-QgLKlwRsvohxLEXfip31DVen15K2NzFFz_4Xgiei-gj8-4l4W4ybKTjG-UiUr0_RPZnowZlP--p22fK52WU8dLJizVN-nj41AosAQDqmzZ-Qd0PjYco6CadxLVcxL3B1drAUnP--aKlEEPm0AGl-HN50hn4BWEf8UIXuDwAqZy_WpD5bdGE5VpXAfztKFg2hANtbBVc37ZmvTKPyS40i0KxOU0_8Tck9JxvcX7j4goAes6dKY-xHliM8c7l5DHH-YqAW3TcnowYq1jsFAk27H5npvU7YcJ-3es1q0NyCpWXkriFnHbVZncjgOtsEnYBWDmLsmppJNLamds96fW7h76yIyqpvERWLcvRtQoUvom3hGAjQRYFXL14uB-SnLpcl1sUtRwjm8Gna0kVmCwOOrPaalaOWeSFEL0ViY8FTugfpDn9bgYely7FKROCP-thDgmVDtPA9rrO6vt0mTy0d9gzRPQnuP0zEz9bZKRbaazt9-2Jtvdlygmul1SYATcR0JtY6nxfHO0XwQmBrtfZup21GG0EOOD1ql5n-Fyi3SUUg=w1282-h961-no?authuser=0'
        alt='logo'
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
