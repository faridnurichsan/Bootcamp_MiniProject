import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address";
import { Users } from "./Users";

@Index("usme_user_pk", ["usproId"], { unique: true })
@Entity("user_profiles", { schema: "users" })
export class UserProfiles {
  @PrimaryGeneratedColumn({ type: "integer", name: "uspro_id" })
  usproId: number;

  @Column("character varying", {
    name: "uspro_national_id",
    nullable: true,
    length: 20,
  })
  usproNationalId: string | null;

  @Column("date", { name: "uspro_birt_date", nullable: true })
  usproBirtDate: string | null;

  @Column("character varying", {
    name: "uspro_job_title",
    nullable: true,
    length: 50,
  })
  usproJobTitle: string | null;

  @Column("character", {
    name: "uspro_martial_status",
    nullable: true,
    length: 1,
  })
  usproMartialStatus: string | null;

  @Column("character", { name: "uspro_gender", nullable: true, length: 1 })
  usproGender: string | null;

  @ManyToOne(() => Address, (address) => address.userProfiles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uspro_addr_id", referencedColumnName: "addrId" }])
  usproAddr: Address;

  @ManyToOne(() => Users, (users) => users.userProfiles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uspro_user_id", referencedColumnName: "userId" }])
  usproUser: Users;
}
