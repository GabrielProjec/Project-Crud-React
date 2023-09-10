import { Typography } from "@mui/material";

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <Typography color="text-primary" variant="h5">
      {title}
    </Typography>
  );
}

export default PageTitle;
