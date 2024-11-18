// in lecture 373 building a reusable context menu at 23:00

import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabins } from "./useDeleteCabins";
import { HiSquare2Stack } from "react-icons/hi2";
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useCreateCabins } from "./useCreateCabins";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabins } = useDeleteCabins();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  const { isCreating, createCabins } = useCreateCabins();

  function duplicateCabins() {
    createCabins({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Max of {maxCapacity} people</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? <Discount>{discount}</Discount> : <div>&mdash;</div>}
        <div>
          {/* <button disabled={isCreating} onClick={duplicateCabins}>
            <HiSquare2Stack />
          </button>
          <Modal>
            <Modal.Open opens="edit">
              <button>
                <FaPencilAlt />
              </button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Open opens="delete">
              <button>
                <MdDeleteForever />
              </button>
            </Modal.Open>

            <Modal.Window name="delete">
              <ConfirmDelete
                onConfirm={() => deleteCabins(cabinId)}
                disabled={isDeleting}
                resourceName="cabin"
              />
            </Modal.Window>
          </Modal> */}

          <Modal>
            <Menus.Menu>
              <Menus.Toggles id={cabinId} />
              <Menus.List id={cabinId}>
                <Menus.Button
                  onClick={duplicateCabins}
                  icon={<HiSquare2Stack />}
                >
                  Duplicate
                </Menus.Button>

                <Modal.Open opens="edit">
                  <Menus.Button icon={<FaPencilAlt />}> Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<MdDeleteForever />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  onConfirm={() => deleteCabins(cabinId)}
                  disabled={isDeleting}
                  resourceName="cabins"
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
