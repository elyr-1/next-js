"use client";
import React, { useState } from "react";
import { Button, Datepicker, Pagination } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";

import { Table } from "flowbite-react";
import LayoutMain from "../layout";

const BillingSummaryPage = () => {
  const itemsPerPage = 3; // Number of items to display per page
  const totalItems = 180; // Total number of items
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="">
      <div className="flex justify-end mb-3">
        <div>Billing summary for the month of</div>
      </div>
      <div className="flex justify-end gap-3">
        <div className="flex justify-start">
          <Dropdown dismissOnClick={false} label="Client name">
            <DropdownItem>Banco De Oro</DropdownItem>
            <DropdownItem>Unionbank</DropdownItem>
          </Dropdown>
        </div>
        <div>
          <Datepicker />
        </div>
        <div>
          <Datepicker />
        </div>
      </div>

      <div className="mt-5">
        <div className="overflow-x-auto">
          <Table hoverable style={{ minWidth: "1200px" }}>
            <Table.Head>
              <Table.HeadCell>
                <p>Personnel</p>
              </Table.HeadCell>
              <Table.HeadCell>SOW / Reference #</Table.HeadCell>
              <Table.HeadCell>Role / Level</Table.HeadCell>
              <Table.HeadCell>Currency</Table.HeadCell>
              <Table.HeadCell>
                <div className="p-5">
                  <div className="flex justify-center mb-5">
                    <p>
                      <b>REGULAR RATE</b>
                    </p>
                  </div>
                  <div className="flex justify-center gap-10 ">
                    <div>Monthly / Daily Rate</div>
                    <div>Hourly Rate</div>
                    <div>Hours</div>
                    <div>Amount</div>
                  </div>
                </div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flex justify-center mb-5">
                  <p>
                    <b>REGULAR OVERTIME(125%)</b>
                  </p>
                </div>
                <div className="flex justify-center gap-10">
                  <div>Rate</div>
                  <div>Hours</div>
                  <div>Amount</div>
                </div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flex justify-center mb-5">
                  <p>
                    <b>Sunday / Rest Day / Special Non Working Holiday 130%</b>
                  </p>
                </div>
                <div className="flex justify-center gap-10">
                  <div>Rate</div>
                  <div>Hours</div>
                  <div>Amount</div>
                </div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flex justify-center mb-5">
                  <p>
                    <b>Sunday / Rest Day / Special Non Working Holiday 169%</b>
                  </p>
                </div>
                <div className="flex justify-center gap-10">
                  <div>Rate</div>
                  <div>Hours</div>
                  <div>Amount</div>
                </div>
              </Table.HeadCell>

              <Table.HeadCell>
                <div className="flex justify-center mb-3">
                  <p>
                    <b>10% Shift Premium</b>
                  </p>
                </div>
                <div className="flex justify-center gap-10">
                  <div>Rate</div>
                  <div>OT Rate (125%)</div>
                  <div>OT Rate (130%)</div>
                  <div>Hours</div>
                  <div>Total Amount</div>
                </div>
              </Table.HeadCell>

              <Table.HeadCell>Total Worked Hours</Table.HeadCell>
              <Table.HeadCell>
                <div className="flex justify-center mb-3">
                  <p>
                    <b>REGULAR</b>
                  </p>
                </div>
                <div className="flex justify-center gap-10">
                  <div>Pay</div>
                </div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flex justify-center mb-3">
                  <p>
                    <b>OVERTIME</b>
                  </p>
                </div>
                <div className="flex justify-center gap-10">
                  <div>Pay</div>
                </div>
              </Table.HeadCell>
              <Table.HeadCell>Total</Table.HeadCell>
              <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  <p>Abellar, Eiyannah Jermayne</p>
                </Table.Cell>
                <Table.Cell>
                  <p>WO 1414</p>
                </Table.Cell>
                <Table.Cell>
                  <p>Manual Tester - Mid</p>
                </Table.Cell>
                <Table.Cell>
                  <p>PHP - Philippine Peso</p>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex justify-center gap-10 ">
                    <div>172,698.27</div>
                    <div>1,079.36</div>
                    <div>160</div>
                    <div>172,698.27</div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex justify-center gap-10">
                    <div>1,349.21</div>
                    <div>12.00</div>
                    <div>16,190.46</div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex justify-evenly gap-10">
                    <div>1,403.17</div>
                    <div>-</div>
                    <div>-</div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex justify-evenly gap-10">
                    <div>1,824.13</div>
                    <div>-</div>
                    <div>-</div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex justify-evenly gap-10">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                  </div>
                </Table.Cell>
                <Table.Cell>172.22</Table.Cell>
                <Table.Cell>
                  <div className="flex justify-center gap-10">
                    <div>172,698.27</div>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex justify-center gap-10">
                    <div>16,190.46</div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex justify-center gap-10">
                    <div>188,888.73</div>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  <Button color="success">Edit</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
      <div className="mb-3 mt-3">
        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-1 col-end-3">
            <Pagination
              currentPage={1}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
              totalPages={100}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex justify-end gap-3">
          <div>
            <Button color="failure">Print PDF</Button>
          </div>
          <div>
            <Button color="dark">Print Preview</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSummaryPage;
