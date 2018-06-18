# data-tools

### There are a few tools here:

#### 1. [`converter.py`](https://github.com/zanedb/hackchicago/blob/master/data-tools/converter.py): converts a CSV file to JSON
  - Prerequisites:
    - A file called `attendees.csv` in the Hack Chicago column format located in [`data-tools/data`](https://github.com/zanedb/hackchicago/tree/master/data-tools/data)
  - To run:
    ```
    python data-tools/converter.py -i data-tools/data/attendees.csv -o data-tools/data/attendees.json -f pretty
    ```
#### 2. [`ref.py`](https://github.com/zanedb/hackchicago/blob/master/data-tools/ref.py): prints the number of referrals each attendee has
  - Prerequisites:
    - A file called `attendees.json` with at least the `FNAME`, `LNAME`, and `REFBY` columns located in [`data-tools/data`](https://github.com/zanedb/hackchicago/tree/master/data-tools/data)
  - To run:
    ```
    python data-tools/ref.py -i data-tools/data/attendees.json
    ```
#### 3. [`importer.py`](https://github.com/zanedb/hackchicago/blob/master/data-tools/importer.py): imports a JSON file of attendees into the attendee API
  - Prerequisites:
    - A file called `attendees.json` with at least all Hack Chicago columns located in [`data-tools/data`](https://github.com/zanedb/hackchicago/tree/master/data-tools/data)
    - A file called `.env` located in [`data-tools`](https://github.com/zanedb/hackchicago/tree/master/data-tools) with the following line (and filled out values):
      ```
      AUTH_KEY=key
      ```
  - To run:
    ```
    python data-tools/importer.py -i data-tools/data/attendees.json
    ```

### PLEASE NOTE THAT [`attendees.csv`](https://github.com/zanedb/hackchicago/blob/master/data-tools/data/attendees.csv) CONTAINS SAMPLE DATA