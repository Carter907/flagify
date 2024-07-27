interface StudyFlagProps {
  flag: Flag
}

function StudyFlag({ flag }: StudyFlagProps) {

  return (
    <div class="border rounded p-2 flex flex-col gap-2">

      <img class="shadow-md" src={flag.img} width="128px" height="128px" alt="image of the US flag" />
      <p class="font-bold text-2xl">{flag.name}</p>
      <p class="bg-neutral-100 p-2">{flag.description}</p>
    </div>
  )
}
export default StudyFlag;
