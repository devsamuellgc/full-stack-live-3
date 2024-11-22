import { ReactNode, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { Customer } from "./Table";

type ClientFormData = {
  name: string;
  email: string;
  phone: string;
  document: string;
  street: string;
  number: string;
  neighborhood: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
  complement?: string | null;
};

export function NewClientModal({
  trigger,
  client,
}: {
  trigger?: ReactNode;
  client?: Customer;
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<ClientFormData>({
    name: "",
    email: "",
    phone: "",
    document: "",
    street: "",
    number: "",
    neighborhood: "",
    zip_code: "",
    city: "",
    state: "",
    country: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const info = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      document: formData.document,
    };

    const address = {
      street: formData.street,
      number: formData.number,
      neighborhood: formData.neighborhood,
      zip_code: formData.zip_code,
      city: formData.city,
      state: formData.state,
      country: formData.country,
    };

    const data = {
      info: { ...info },
      address: { ...address },
    };

    if (client && client.info.id) {
      await axios.patch(`http://localhost:3000/cliente/${client?.info.id}`, {
        ...data,
        addressId: client.address.id,
      });
    } else {
      await axios.post("http://localhost:3000/cliente", data);
    }

    setOpen(false);
  };

  useEffect(() => {
    if (!client) return;
    const data: ClientFormData = {
      city: client.address.city,
      country: client.address.country,
      neighborhood: client.address.neighborhood,
      number: client.address.number,
      state: client.address.state,
      street: client.address.street,
      zip_code: client.address.zip_code,
      complement: client.address.complement,
      document: client.info.document,
      email: client.info.email,
      name: client.info.name,
      phone: client.info.phone,
    };
    setFormData(data);
  }, [client]);

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value && !client) setFormData({} as ClientFormData);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cliente</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className=" space-y-4">
          <div className="grid gap-x-6 grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="document">Documento</Label>
              <Input
                id="document"
                name="document"
                value={formData.document}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="street">Logradouro</Label>
              <Input
                id="street"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="number">Número</Label>
              <Input
                id="number"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="neighborhood">Bairro</Label>
              <Input
                id="neighborhood"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip_code">CEP</Label>
              <Input
                id="zip_code"
                name="zip_code"
                value={formData.zip_code}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">Estado</Label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">País</Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Confirmar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
