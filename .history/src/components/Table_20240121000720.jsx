import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HigherOrder from "./HigherOrder";

function BasicTable({ records, monthNames }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        minWidth: 450,
        maxWidth: 850,
        minHeight: 450,
        maxHeight: 500,
        height: 500,
      }}
    >
      <Table
        sx={{
          minWidth: 450,
          maxWidth: 850,
          minHeight: 450,
          maxHeight: 500,
          height: 500,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {monthNames.map((item) => (
              <TableCell key={item}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {monthNames.map((item) => (
                <TableCell key={item} component="th" scope="row">
                  {row[item]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const TotalSalesForProduct = HigherOrder(
  BasicTable,
  "Monthly Data For All Product"
);

export default TotalSalesForProduct;
