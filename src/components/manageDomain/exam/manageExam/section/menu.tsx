import Menus from "@src/components/shared/menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Delete from "../../delete";
import AddQuestion from "./addQuestion";
import Link from "next/link";
import { useMenu } from "@src/utils/hooks";

export default function SectionMenu({
  id,
  centreId,
}: {
  id: string;
  centreId: string;
}) {
  const { anchorEl, menuIsOpen, closeMenu, openMenu } = useMenu();

  return (
    <>
      <IconButton onClick={openMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menus anchorEl={anchorEl} open={menuIsOpen} closeMenu={closeMenu}>
        <div>
          <Link passHref href={`/admin/course/${id}/update?type=FOLDER`}>
            <MenuItem disableRipple>
              <EditIcon />
              Edit
            </MenuItem>
          </Link>
          <Delete id={id} centreId={centreId} />
          <Divider sx={{ my: 0.5 }} />
          <AddQuestion examId={id} centreId={centreId} />
        </div>
      </Menus>
    </>
  );
}