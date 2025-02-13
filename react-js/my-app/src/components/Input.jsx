function Input({
  type = "text",
  label = "No Name",
  value = "",
  handleInput,
  index,
}) {
  return (
    <>
      <section className="mb-3">
        <label htmlFor="" className="form-label">
          {label}
        </label>
        {type === "address" ? (
          <textarea
            type={type}
            className="form-control"
            value={value}
            placeholder={`Enter ${label}`}
            onChange={(event) => handleInput(event, index)}
          ></textarea>
        ) : (
          <>
            {type === "radio" ? (
              <>
                {value.map((radioValue, radioIndex) => {
                  return (
                    <section className="form-check" key={radioIndex}>
                      <label htmlFor="" className="form-check-label">
                        {radioValue.filed}
                      </label>
                      <input
                        type={type}
                        className="form-check-input"
                        value={radioValue.value}
                        checked={radioValue.check}
                        onChange={(event) =>
                          handleInput(event, index, radioIndex, radioValue)
                        }
                      />
                    </section>
                  );
                })}
              </>
            ) : (
              <input
                type={type}
                className="form-control"
                value={value}
                placeholder={`Enter ${label}`}
                onChange={(event) => handleInput(event, index)}
              />
            )}
          </>
        )}
      </section>
    </>
  );
}

export default Input;
