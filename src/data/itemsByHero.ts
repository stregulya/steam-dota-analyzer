export type Item = {
  id: string;
  name: string;
  image: string;
  price: number;
  salesPerDay: number;
};

export const itemsByHero: Record<string, Item[]> = {
  axe: [
    {
      id: "immortal_axe",
      name: "Molten Claw",
      image:
        "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_fMxoWsOneD4FhK94v1_RbqThHlm5jf_i5a-M2iabZqJb7DVjfBlL11tudsTSq3zUwitmrXztygJXnBOwIhCpVwF-VfukO4x9PkKaq8sB3tYlYl/360fx360f",
      price: 2.53,
      salesPerDay: 14,
    },
    {
      id: "arcana_axe",
      name: "Fractal Horns of Inner Abysm",
      image:
        "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGI2zyUS1Q7nAxtizOmmV6Vdx8cj1-FrmTxzOipPy7y1J7f6vbKFSLPGBCWLewO0v5uQxSnnjkx5_5m6Ez9yueHmROw8pApV0R-cLtRK4xIHuNb7ntRue1dxikdfrfQ/360fx360f",
      price: 26.4,
      salesPerDay: 4,
    },
  ],
  juggernaut: [
    {
      id: "arcana_jugg",
      name: "Bladeform Legacy",
      image:
        "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIyi3kajH_zBxM2kJ3WW8EI69ZX361fmDhfkmZHl7yxa-uaRabZuIf6SMWCCxOt4j-1oXS622xwm5WmAydmveXmVbgEoW5Z2QrMM5EK-lNXiN7-x51DXitlByH-s3yhXrnE8TMumuMg/360fx360f",
      price: 31.2,
      salesPerDay: 10,
    },
  ],
};
