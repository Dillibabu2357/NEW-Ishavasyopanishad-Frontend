import HorizontalScroll from "@/assets/horizontal_scroll.png"
const SutraView = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HorizontalScroll})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        minHeight: "200px",
      }}
    >
      <div className="px-12 pt-8 pb-14">
        <p className="font-bold text-orange-500 text-xl">
          oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate | pūrṇasya pūrṇamādāya
          pūrṇamevāvaśiṣyate || oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate |
        </p>

        <p className="mt-4">
          oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate | pūrṇasya pūrṇamādāya
          pūrṇamevāvaśiṣyate || oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate |
          pūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate ||
        </p>
      </div>
    </div>
  )
}

export default SutraView
