import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddCircleOutlineOutlined from "@mui/icons-material/AddCircleOutlineOutlined";
import Dialog from "@src/components/shared/dialog";
import TextFields from "@src/components/shared/input/textField";
import useForm from "@src/hooks/useForm";
import { useDialog } from "@src/hooks";
import { handleError, queryClient, request } from "@src/utils";
import { useState } from "react";
import ButtonComponent from "@src/components/shared/button";
import dynamic from "next/dynamic";
import { BasePageProps } from "@src/utils/interface";

const AddSubscriber = ({
  toggleToast,
  productId,
  refetch,
}: {
  toggleToast: Function;
  refetch: Function;
  productId: string;
}): JSX.Element => {
  const { isOpen, openDialog, closeDialog } = useDialog();
  const [isLoading, setIsLoading] = useState(false);
  const { getData, values, submit } = useForm(create);
  const { cachedData } = queryClient.getQueryData("pageProps") as BasePageProps;
  const Loading = dynamic(() => import("@src/components/shared/loading"));
  async function create() {
    try {
      setIsLoading(true);
      const data = await request.post({
        url: `/centre/${cachedData.centre.id}/product/${productId}/pricing`,
        data: values,
      });
      refetch();
      toggleToast(data.message);
      setIsLoading(false);
      closeDialog();
    } catch (error) {
      toggleToast(handleError(error).message);
      setIsLoading(false);
    }
  }

  return (
    <>
      <ButtonComponent
        variant="contained"
        onClick={() => openDialog()}
        sx={{ fontSize: 18 }}
      >
        <>
          <AddCircleOutlineOutlined /> &nbsp; Add Payment Plan
        </>
      </ButtonComponent>

      <Dialog
        title="Add Payment Plan"
        isOpen={isOpen}
        closeDialog={closeDialog}
        content={
          <form onSubmit={(e) => submit(e)}>
            <Stack spacing={3} mt={3}>
              {/* <Typography variant="h5" component="div">
                Enter Subscriber’s email or username:
              </Typography>
              <Typography variant="subtitle1" component="div">
                Type the emails or username of the new subscribers you want to
                add. If you want to add multiple subscribers, then seperate the
                email or username with a comma (,)
              </Typography> */}
              <TextFields
                type="text"
                label="Name"
                name="name"
                onChange={getData}
                required
              />
              <TextFields
                type="number"
                label="Amount"
                name="amount"
                onChange={getData}
                required
              />
              <TextFields
                type="number"
                label="Duration In Days"
                name="durationInDays"
                onChange={getData}
                required
              />
              <TextFields
                label="Summary"
                name="summary"
                onChange={getData}
                required
              />
              <Typography style={{ textAlign: "right", marginTop: 20 }}>
                <ButtonComponent type="submit" sx={{ fontSize: 18 }}>
                  <>
                    Add Payment Plan
                    {isLoading && <Loading size={15} />}
                  </>
                </ButtonComponent>
                <ButtonComponent
                  onClick={() => closeDialog()}
                  sx={{ fontSize: 18 }}
                >
                  Cancel
                </ButtonComponent>
              </Typography>
            </Stack>
          </form>
        }
      />
    </>
  );
};

export default AddSubscriber;
