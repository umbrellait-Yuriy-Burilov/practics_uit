import {FC} from 'react';

export const Update: FC<{isUpdate: boolean}> = ({isUpdate}) => {
  if (isUpdate) {
    return <div>Update...</div>
  }

  return null

}