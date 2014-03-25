var seats, duration, sales;

function update ()
{
	seats = document.getElementById ("seats").value;
	duration = document.getElementById ("duration").value;
	sales = document.getElementById ("sales").value;

	var tables = document.getElementsByClassName ("calculated");

	for (var i = 0; i < tables.length; i++)
	{
		updateTable (tables[i]);
	}
}

function updateTable (table)
{
	for (var y = 0; y < table.rows.length; y++)
	{
		for (var x = 0; x < table.rows[y].cells.length; x++)
		{
			var cell = table.rows[y].cells[x];

			if (cell.hasAttribute ("formula"))
			{
				cell.innerHTML = "$" + eval (cell.getAttribute ("formula"));
			}
		}
	}
}

function ceiling (number, factor)
{
	return Math.round (Math.ceil (number / factor) * factor);
}
