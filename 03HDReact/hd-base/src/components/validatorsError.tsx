interface Props {
  errors: unknown[]
}

export function ValidatorsError({ errors }: Props) {
  if (!errors.length) {
    return null
  }

  return (
    <div className="bg-red-500 text-white px-2 py-1 rounded mt-2">
      {errors.map(error => String(error)).join(', ')}
    </div>
  )
}
