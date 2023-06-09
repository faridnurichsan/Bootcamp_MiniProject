import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address";
import { Country } from "./Country";

@Index("prov_id_pk", ["provId"], { unique: true })
@Entity("proviences", { schema: "master" })
export class Proviences {
  @PrimaryGeneratedColumn({ type: "integer", name: "prov_id" })
  provId: number;

  @Column("character varying", {
    name: "prov_name",
    nullable: true,
    length: 85,
  })
  provName: string | null;

  @OneToMany(() => Address, (address) => address.addrProv)
  addresses: Address[];

  @ManyToOne(() => Country, (country) => country.proviences, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "prov_country_id", referencedColumnName: "countryId" }])
  provCountry: Country;
}
