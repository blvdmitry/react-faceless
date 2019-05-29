export default (...classNames: (string | boolean | undefined | null)[]) => classNames.filter(Boolean).join(' ');
