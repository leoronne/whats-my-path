import { Link, Typography, Icons } from '../../ui';

interface BackButtonProps {
  variant: 'light' | 'dark' | 'none';
}

function BackButton({ variant }: BackButtonProps) {
  return (
    <Link to="/" height={47} variant={variant}>
      <Icons.ArrowLeftIcon />

      <Typography.Text>back</Typography.Text>
    </Link>
  );
}

export default BackButton;
