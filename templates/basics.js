module.exports = {
  pokemon: {
    enabled: true,
    options: {
      keys: {
        main: "pokedexId",
        forms: "formId",
        tempEvolutions: "tempEvoId",
      },
      customFields: {
        evoId: "pokemon",
        formId: "form",
      },
      snake_case: true,
      includeProtos: true,
      includeEstimatedPokemon: true,
    },
    template: {
      forms: {
        attack: true,
        defense: true,
        stamina: true,
        tempEvolutions: {},
        evolutions: {
          evoId: true,
          formId: true,
          genderRequirement: true,
        },
        little: true,
      },
      evolutions: {
        evoId: true,
        formId: true,
        genderRequirement: true,
      },
      tempEvolutions: {
        attack: true,
        defense: true,
        stamina: true,
        unreleased: true,
      },
      attack: true,
      defense: true,
      stamina: true,
      little: true,
    },
  },
}
