export const realisationsImages = Object.values(
  import.meta.glob<string>(
    "../assets/images/realisations/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
);