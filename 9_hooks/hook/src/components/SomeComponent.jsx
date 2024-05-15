import { forwardRef, useRef, useImperativeHandle } from "react";

// eslint-disable-next-line react/display-name
export const SomeComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
});
